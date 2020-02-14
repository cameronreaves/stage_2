library(tidyverse)
library(ggthemes)
library(sf)
library(tmap)
library(tigris)
library(usmap)
library(maps)
library(mapdata)
library(rnaturalearth)
library(rnaturalearthdata)

setwd("~/Documents/courses/dg/geo-climate")


#loads spatial data files
if(FALSE){
county <- st_read("tl_2019a_us_county.shp")
us_county <- st_read("US_County_Boundaries.shp")
counties <- st_read("c_02ap19.shp")
}

climate = read_csv("climate.csv")
zillow = read_csv("zillow.csv")

#initial cleaning / manipulation
# county = county %>% 
#   select(-STATEFP,-COUNTYFP, -COUNTYNS, -NAMELSAD)

zillow = zillow %>% 
  rename(zillow = `2019-12`, county = RegionName, state = State, size_rank = SizeRank) %>% 
  unite("fips" ,StateCodeFIPS:MunicipalCodeFIPS,sep="") %>% 
  select(county, state, fips,size_rank, zillow)
zillow$county = str_trim(sub("County", "",zillow$county))

climate = climate %>% 
  rename(county = County, state = State, in_mig = `In-Migration`, 
         out_mig = `Out-Migration`, net = `Net Migration`,error = `+/-`, mig_rank = Rank)
  states <- c(climate$state)
  climate$state = state.abb[match(states,state.name)]

merged = merge(climate,zillow,by=c("county","state")) %>% 
  mutate(county = tolower(county))


# counties = map_data("county")
# 
# m = merged %>% full_join(counties, by = c("county" = "subregion")) 
# m[is.na(m)] = 0


ggplot(data = m, mapping = aes(x = long, y = lat, group = group, fill = log10(zillow))) +
  geom_polygon(color = "black") +
  theme(
    rect = element_blank(), 
    line = element_blank(),
    text = element_blank() 
  )

counties <- st_as_sf(map("county", plot = FALSE, fill = TRUE))
# counties <- subset(counties, grepl("florida", counties$ID))

c = counties %>% 
  separate(ID, c("state", "county"),",") %>% 
  mutate(state = R.utils::capitalize(state))

states <- c(c$state)
c$state = state.abb[match(states,state.name)]

f = full_join(c,merged,by=c("county","state"))


world <- ne_countries(scale = "medium",returnclass = "sf")

usa <- subset(world, admin == "United States of America")

ggplot(data = usa) +
  geom_sf() +
  geom_sf(data = f, aes(fill = zillow)) +
  scale_fill_gradient(name = "zillow", trans = "log10") +
  coord_sf(xlim = c(-125, -67), ylim = c(24.5, 50), expand = FALSE)




# #joining datasets
# climate = climate %>% left_join(zillow, by = c("County" = "RegionName"))
# 
# climate = climate %>% 
#     distinct(County, .keep_all = TRUE)

# climate <- climate %>% 
#   filter(!is.na(`2019-12`))
# 
# 
# #join spatial dataframe and dataframe
# geo_clim = geo_join(counties, climate, "COUNTYNAME", "County", by = NULL, how = "inner")
# 
# geo_clim = geo_clim[!duplicated(geo_clim$COUNTYNAME), ]
# 
# geo_clim <- geo_clim %>% 
#   filter(!is.na(`2019-12`))
# 
# geo_clim <- geo_clim %>% 
#   rename(zillow = `2019-12`)
# 
# class(geo_clim)
# 
# 
# tm_shape(geo_clim, simplify = .07) +
#   tm_polygons("zillow")
# 
# qtm(geo_clim, fill = "zillow", fill.pallete = "RdYlGn")



