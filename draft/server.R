library(shiny)

# Define server logic required to draw a histogram
shinyServer(function(input, output) {

    output$state <- renderPlot({
        climate_sf %>%
            filter(state_name == input$variable) %>% 
            ggplot(aes()) +
            geom_sf(aes(fill = cb_net)) +
            labs(
                title = "Predicted Net Migration by County", 
                subtitle = "Global mean sea level rise resulting from global warming", 
                fill = "Net Migration"
            ) +
            scale_fill_gradient2(low = "#fdbf11", high = "#0a4c6a") +
            p
    })
    
    output$top_10 <- render_gt({
      climate_sf %>% 
        filter(state_name == input$variable) %>% 
        arrange(desc(net)) %>% 
        head(n = 10) %>% 
        select(-county_fips) %>%
        gt() %>% 
        tab_header(
          title = "Top 10 Cities for Predicted In-Migration",
          subtitle = "Cities with Positive Net Migration"
        ) %>% 
        cols_hide(
          columns = vars(
            geometry)
        ) %>% 
        cols_label(
          county_name = "County",
          state_name = "State",
          net = "Net Migration",
          cb_net = "Cube Root"
        ) 
    })

})
