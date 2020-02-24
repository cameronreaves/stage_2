library(shiny)

shinyUI(
    navbarPage("Sea Level Rise",
                   tabPanel("Project", 
                            titlePanel("Net Migration resulting from Sea Level Rise in US. Counties by 2100"),
                            fluidPage( 
                                      fluidRow(
                                        column(12,
                                               htmlTemplate("by_state.html")
                                        )
                                      ),
                              fluidRow(
                                column(6,
                                         selectInput("variable",
                                                     "States:",
                                                     include), 
                                        plotOutput("state")
                                ), 
                                column(6, 
                                       tableOutput("top_pos"), 
                                       tags$br(),
                                       tableOutput("top_neg")
                                       )
                              )
                            )
                            ),
                   tabPanel("About",
                            titlePanel("About"),
                            fluidRow(
                              column(2),
                              column(8,
                            htmlTemplate("about.html")
                              )
                              )
                            ), 
                   fluid = TRUE, 
                   theme = "style.css"
               )
  )
