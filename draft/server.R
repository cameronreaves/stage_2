library(shiny)

shinyServer(function(input, output, session) {
  
  theme = theme(
    panel.background = element_blank(),
    axis.ticks = element_blank(),
    axis.text = element_blank(), 
    text = element_text(family = "Lato")
  )  
  
  domain <- reactive({
    domain = climate_sf %>% 
      filter(state_name == input$variable & !is.na(net)) %>%
      filter(net == max(net) | net == min(net)) %>% 
      arrange(desc(net)) %>% 
      pull(net)
  })
  
  stateInput <- reactive({
      if(input$variable == "All"){
        climate_sf
      }
    else{
     climate_sf %>% 
      filter(state_name == input$variable)
    }
  })
  
  #This is so cool but too complicated
  # observe({
  #   x <- input$select
  # 
  #   # Can use character(0) to remove all choices
  #   if (is.null(x)){
  #     x <- character(0)
  #   }
  #   
  #   c = climate_sf %>% 
  #     filter(state_name == x & net < 0) %>% 
  #     pull(county_name) 
  #   
  #   # Can also set the label and select items
  #   updateSelectInput(session, "inSelect",
  #                     choices = c,
  #                     selected = "California"
  #   )
  # })
  # 
  # coun <- reactive({
  #   distance %>% 
  #     filter(countyname1 == input$inSelect)
  # })
  # 
  # 
  # output$dis = renderTable({
  #   coun()
  # })
  
  

    output$state <- renderPlot({
        stateInput() %>% 
            ggplot(aes()) +
            geom_sf(aes(fill = cb_net)) +
            labs(
                title = "Predicted Net Migration by County", 
                subtitle = "Global mean sea level rise resulting from global warming", 
                fill = "Net Migration"
            ) +
            scale_fill_gradient2(low = "#fdbf11", high = "#0a4c6a") +
            theme
    })
    
    output$top_pos <- render_gt({
      
      stateInput()%>% 
        filter(!is.na(net)) %>% 
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
            domain = c(domain()[1], 0))
        ) %>% 
        cols_label(
          county_name = "County",
          state_name = "State",
          net = "Net Migration",
          cb_net = "Cube Root")
      
    })
    
    output$top_neg <- render_gt({
      
        stateInput() %>%
        filter(!is.na(net)) %>% 
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
            domain = c(0, domain()[2]))
        ) %>% 
        cols_label(
          county_name = "County",
          state_name = "State",
          net = "Net Migration",
          cb_net = "Cube Root")
    })
    
  

})
