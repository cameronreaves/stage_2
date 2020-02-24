library(tidyverse)
library(ggthemes)
library(sf)
library(maps)
library(usmap)
library(mapdata)
library(rnaturalearth)
library(rnaturalearthdata)
library(openintro)
library(gt)

setwd("~/Documents/courses/dg/stage_2")

#Cubic function for transforming negative net values

cbrt <- function(x) {
  sign(x) * abs(x)^(1/3)
}

#Datasets 

climate = read_csv("climate.csv")
zillow = read_csv("zillow.csv")

#library maps ? I forget

counties <- st_as_sf(map("county", plot = FALSE, fill = TRUE))

#libary usmap


#The background / maps  

world = ne_countries(scale = "medium",returnclass = "sf")
usa = subset(world, admin == "United States of America")

#Clean the datasets 

counties = counties %>% 
  separate(ID, c("state", "county"),",")
#  mutate(state = R.utils::capitalize(state))
# states <- c(counties$state)
# counties$state = state.abb[match(states,state.name)]  




zillow = zillow %>% 
  rename(zillow = `2019-12`, county = RegionName, state = State, size_rank = SizeRank) %>% 
  unite("fips" ,StateCodeFIPS:MunicipalCodeFIPS,sep="") %>% 
  select(county, state, zillow) %>% 
  mutate(county = tolower(county), state = tolower(abbr2state(state))) 
zillow$county = str_trim(sub("county", "",zillow$county))
zillow$county = str_trim(sub("parish", "",zillow$county))



climate = climate %>% 
  select(county = County, state = State, net = `Net Migration`, mig_rank = Rank) %>% 
  mutate(county = tolower(county), state = tolower(state), cb_net = cbrt(net))
  # states <- c(climate$state)
  # climate$state = state.abb[match(states,state.name)]


#Combines datasets with counties

c_zillow = left_join(counties,zillow,by=c("county","state"))

c_climate = left_join(counties,climate, by=c("county", "state"))



ggplot(climate, aes(cb_net))+
  geom_histogram()

ggplot(zillow, aes(log10(zillow)))+
  geom_histogram()



#plot
ggplot(data = world) +
  geom_sf() +
  geom_sf(data = c_zillow, aes(fill = zillow)) +
  scale_fill_gradient(name = "zillow", trans = "log10") +
  coord_sf(xlim = c(-125, -67), ylim = c(24.5, 50), expand = FALSE) +
  theme(rect = element_blank(), 
        text = element_blank(), 
        line = element_blank(), 
        legend.position = "none")

ggplot(data = usa) +
  geom_sf() +
  geom_sf(data = c_climate, aes(fill = cb_net )) +
  scale_fill_gradient(name = "cb_net") +
  coord_sf(xlim = c(-125, -67), ylim = c(24.5, 50), expand = FALSE)

climate %>% 
  arrange(mig_rank) %>% 
  head(n = 10) %>% 
  select(-mig_rank) %>%
  gt() %>% 
  tab_header(
    title = "Top 10 Cities for Predicted In-Migration",
    subtitle = "Cities with Positive Net Migration"
  )

climate %>% 
  arrange(desc(mig_rank)) %>% 
  head(n = 10) %>% 
  select(-mig_rank) %>% 
  gt() %>% 
  tab_header(
    title = "Top 10 Cities for Predicted Out-Migration",
    subtitle = "Cities with Negative Net Migration"
  )

#gets fips my dude
fips("CA", county = "orange")
fips(state = "AL", county = "autauga")
  
fips

library(rvest)
url <- "https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=nrcs143_013697"
webpage <- read_html(url)
fips_html <- html_nodes(webpage, "#detail td:nth-child(1)")
f <- html_text(fips_html)
county_html <- html_nodes(webpage, "td:nth-child(2)")
count <- html_text(county_html)
state_html <- html_nodes(webpage, "#detail td~ td+ td")
state <- html_text(state_html)

f = substr(f, 7, 11)

c = substr(count, 7, 30)
c = c[-1]

c = c[-length(c)]

s = substr(state, 7, 9)

class(c)

fips_wed = data.frame(f,c,s)


write_csv(fips_wed, "web_fips")




distance  = read_csv("distance.csv")

distance %>% 
  mutate(state_1 = c(usmap::fips_info(county1)$full), 
         state_2 = c(usmap::fips_info(county2)$full[1]))


distance$state_1 = c(usmap::fips_info(distance$county1)$full[1])

c(usmap::fips_info(distance$county1)$full)

distance$county1

d_sf = counties_sf %>% 
  left_join(distance, by = c("county_fips" = "county1"))
  
distance %>% 
  filter(county1 == "37187")


climate_sf %>% 
  filter(state_name == "North Carolina", net < 0)





v = climate_sf %>% 
  filter(state_name == "North Carolina") %>% 
  pull(county_name)

distance_sf %>% 
  filter(countyname1 == "Fulton County")







climate_top_m = full_join(zillow, opp_atlas, by = c("fips" = "cty")) %>% 
  semi_join(climate_top %>% filter(net > 0), by = c("fips" = "f"))

