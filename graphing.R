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

countypop = countypop

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


  
c_zillow = left_join(counties,zillow,by=c("county","state"))

c_climate = left_join(counties,climate, by=c("county", "state"))



ggplot(climate, aes(cb_net))+
  geom_histogram()

ggplot(zillow, aes(log10(zillow)))+
  geom_histogram()



#plot
ggplot(data = usa) +
  geom_sf() +
  geom_sf(data = c_zillow, aes(fill = zillow)) +
  scale_fill_gradient(name = "zillow", trans = "log10") +
  coord_sf(xlim = c(-125, -67), ylim = c(24.5, 50), expand = FALSE)

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
  ) %>% 
  tab_footnote(
    footnote = "Evaluation on a Scale of 1 to 10", 
    locations = cells_title()
  )

climate %>% 
  arrange(desc(mig_rank)) %>% 
  head(n = 10) %>% 
  select(-mig_rank) %>% 
  gt() %>% 
  tab_header(
    title = "Top 10 Cities for Predicted Out-Migration",
    subtitle = "Cities with Negative Net Migration"
  ) %>% 
  tab_footnote(
    footnote = "Evaluation on a Scale of 1 to 10", 
    locations = cells_title()
  )

#gets fips my dude
fips("CA", county = "orange")
fips(state = "AL", county = "autauga")
  


