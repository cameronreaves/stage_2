library(tidyverse)
library(urbnmapr)
library(urbnthemes)
library(usmap) #for get fips
library(openintro) # state abbr
library(gt)
library(stringr)
library(forcats)

cbrt <- function(x) {
  sign(x) * abs(x)^(1/3)
}

read_county = function(){
counties_sf <- get_urbn_map("counties", sf = TRUE)

include = c(
"Washington",
"California", 
"Texas", 
"Florida",
"Georgia",
"South Carolina", 
"North Carolina",
"Virginia",
"Maryland",
"Delaware",
"New Jersey",
"New York",
"Connecticut",
"Rhode Island",
"Massachusetts",
"New Hampshire", 
"Louisiana", 
"Mississippi", 
"Alabama", 
"Oregon", 
  "All")

counties_sf = counties_sf %>% 
  filter(state_name %in% include)

return(counties_sf)

}

#Zillow
read_zillow <- function() {
  
zillow = read_csv("zillow.csv")
  

zillow = zillow %>% 
  rename(zillow = `2019-12`, county = RegionName, state = State, size_rank = SizeRank) %>% 
  unite("fips" ,StateCodeFIPS:MunicipalCodeFIPS,sep="") %>% 
  select(county, state, zillow, fips) %>% 
  mutate(county = tolower(county), state = tolower(abbr2state(state))) 
  zillow$county = str_trim(sub("county", "",zillow$county))
  zillow$county = str_trim(sub("parish", "",zillow$county))

zillow_sf = counties_sf %>% 
    left_join(zillow, by = c("county_fips" = "fips")) %>% 
    select(-fips_class, -state_abbv, -state_fips, -county, -state)

return(zillow_sf)

}

read_climate = function() {
  
climate = read_csv("climate.csv")
web_fips = read_csv("web_fips")

states <- c(climate$State)
climate$State = state.abb[match(states,state.name)] 

climate = climate %>% 
  left_join(web_fips, by = c("County" = "c", "State" = "s"))

climate = climate %>% 
  select(county = County, state = State, net = `Net Migration`, mig_rank = Rank, f) %>% 
  mutate(cb_net = cbrt(net))

climate = data.frame(climate)

climate_sf = counties_sf %>% 
  left_join(climate, by = c("county_fips" = "f")) %>% 
  select(-fips_class, -state_abbv, -state_fips, -county, -state, -mig_rank)

return(climate_sf)

}


read_opp = function(){
  
opp_atlas = read_csv("opp_atlas.csv")

#Opportunity Atlas
opp_atlas = opp_atlas %>% 
  mutate(cty = str_remove(cty, "cty")) %>% 
  rename("h_income" = Household_Income_rP_gP_p25)

opp_sf = counties_sf %>% 
  left_join(opp_atlas, by = c("county_fips" = "cty")) %>% 
  select(-Name,-fips_class, -state_abbv, -state_fips)

return(opp_sf)
}



read_distance = function(){
  
distance = read_csv("distance.csv")
  
distance_sf = counties_sf %>% 
  left_join(distance, by = c("county_fips" = "county2")) %>% 
  rename("county2" = county_fips, "state_name2" = state_name) %>% 
  select(-fips_class, -state_abbv, -state_fips, -county_name, -mi_to_county)

distance_sf = distance_sf %>% 
  left_join(opp_atlas, by = c("county2" ="cty")) %>% 
  select(-Name)

distance_sf = distance_sf %>% 
  left_join(zillow, by = c("county2" ="fips")) %>% 
  select(-county, -state)

distance_sf = distance_sf %>% 
  anti_join(
    climate %>% filter(net >= 0 | is.na(net)), by = c("county1" = "f"))

return(distance_sf)

}
######## READ IN THE DATA 

zillow_sf = read_zillow()

counties_sf = read_county()


climate_sf = read_climate()


opp_sf = read_opp()

distance_sf = read_distance()



climate_top = climate %>% 
  filter(mig_rank < 16 | mig_rank > 1735) %>% 
  unite(col="name", county:state, sep = ",") %>% 
  mutate(name = as.factor(name))


climate_top_m = full_join(zillow, opp_atlas, by = c("fips" = "cty")) %>% 
  semi_join(climate_top %>% filter(net > 0), by = c("fips" = "f"))

climate_top_m %>% 
  ggplot(aes(zillow, h_income))+
  geom_point()


#####PLOTS 

zillow_sf %>% 
  ggplot(aes()) +
  geom_sf(aes(fill = log10(zillow))) +
  labs(
    title = "Zillow Home Value Index by County", 
    subtitle = "$ value of a typical home within the county (Dec 2019)", 
    legend = "Log 10 ZHVI"
  ) +
  scale_fill_gradientn()


p = theme(
  panel.background = element_blank(),
  axis.ticks = element_blank(),
  axis.text = element_blank(), 
  text = element_text(family = "Lato")
  )

climate_sf %>% 
  ggplot(aes()) +
  geom_sf(aes(fill = cb_net)) +
  labs(
    title = "Predicted Net Migration by County", 
    subtitle = "Global mean sea level rise resulting from global warming", 
    fill = "Net Migration"
  ) +
  scale_fill_gradient2(low = "#fdbf11", high = "#0a4c6a") +
  p


climate_top %>% 
  ggplot(aes(reorder(name, net),net, fill = (net > 0)))+
  geom_bar(stat="identity") +
  coord_flip() +
  scale_fill_manual(values = c("#fdbf11", "#0a4c6a")) +
  labs(
    title = "Top 15 + / -  Migration by County", 
    subtitle = "", 
    fill = "Net Migration"
  ) + 
  theme(
    panel.background = element_blank(),
    axis.ticks = element_blank(),
    text = element_text(family = "Lato"), 
    legend.text = element_blank()
  )



opp_sf %>% 
  ggplot(aes()) +
  geom_sf(aes(fill = log10(h_income))) +
  labs(
    title = "Upward Mobility by County", 
    subtitle = "Median household income of children when adults", 
    legend = "Household Income"
  ) +
  scale_fill_gradient(low = "#f5cbdf",high = "#761548")

distance_sf %>% 
  filter(countyname1 == "Fulton County" & state_name2 == "Georgia") %>% 
  ggplot(aes()) +
  geom_sf(aes(fill = log10(h_income))) +
  labs(
    title = "Upward Mobility by County", 
    subtitle = "Median household income of children when adults", 
    legend = "Household Income"
  ) +
  scale_fill_gradient(low = "#f5cbdf",high = "#761548")





#Tables 

climate %>% 
  arrange(mig_rank) %>% 
  head(n = 10) %>% 
  select(-mig_rank,-f) %>%
  gt() %>% 
  tab_header(
    title = "Top 10 Cities for Predicted In-Migration",
    subtitle = "Cities with Positive Net Migration"
  ) %>% 
  cols_label(
    county = "County",
    state = "State",
    net = "Net Migration",
    cb_net = "Cube Root"
  ) 

climate %>% 
  arrange(desc(mig_rank)) %>% 
  head(n = 10) %>% 
  select(-mig_rank, -f) %>% 
  gt() %>% 
  tab_header(
    title = "Top 10 Cities for Predicted Out-Migration",
    subtitle = "Cities with Negative Net Migration"
  ) %>% 
  cols_label(
    county = "County",
    state = "State",
    net = "Net Migration",
    cb_net = "Cube Root"
  ) 


domain = climate_sf %>% 
  filter(state_name == "Florida" & !is.na(net)) %>%
  filter(net == max(net) | net == min(net)) %>% 
  arrange(desc(net)) %>% 
  pull(net)

climate_sf %>% 
  filter(state_name == "Florida" & !is.na(net)) %>% 
  arrange(desc(net)) %>% 
  head(n = 5) %>% 
  select(-county_fips) %>%
  gt() %>% 
  tab_header(
    title = "Top 5 Counties for Predicted In-Migration",
    subtitle = "Counties with Positive Net Migration"
  ) %>% 
  cols_hide(
    columns = vars(
      geometry)
  ) %>% 
  data_color(
    columns = vars(net),
    colors = scales::col_numeric(
      palette = c(
        "#cfe8f3", "#73bfe2", "#1696d2", "#0a4c6a"), 
    domain = c(domain[1], 0))
  ) %>% 
  cols_label(
    county_name = "County",
    state_name = "State",
    net = "Net Migration",
    cb_net = "Cube Root")

  
  climate_sf %>% 
    filter(state_name == "Florida" & !is.na(net)) %>% 
    arrange(desc(net)) %>% 
    tail(n = 5) %>% 
    select(-county_fips) %>%
    gt() %>% 
    tab_header(
      title = "Top 5 Counties for Predicted Out-Migration",
      subtitle = "Counties with Negative Net Migration"
    ) %>% 
    cols_hide(
      columns = vars(
        geometry)
    ) %>% 
    data_color(
      columns = vars(net),
      colors = scales::col_numeric(
        palette = c(
         "#ca5800","#fdbf11", "#fdd870", "#fff2cf"), 
        domain = c(0, domain[2]))
      ) %>% 
        cols_label(
          county_name = "County",
          state_name = "State",
          net = "Net Migration",
          cb_net = "Cube Root")
  
  

  

  
  
    
    