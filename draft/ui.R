library(shiny)
source("helper.R", local = TRUE)
#from helper
include = get_include()

shinyUI(
    navbarPage("Sea Level Rise",
                   tabPanel("Geo-Spatial",
                            tags$div(
                            titlePanel("Net Migration resulting from Sea Level Rise in US. Counties by 2100")
                            ,style="text-align:center;"),
                            fluidPage( 
                                      fluidRow(
                                        column(6,
                                                 htmlTemplate("geo_1.html")
                                        ), 
                                        column(6,
                                               htmlTemplate("geo_2.html")
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
                   tabPanel("Charts",
                            tags$div(
                              titlePanel("Upward Mobility and Housing Prices in Net Positive Counties"),
                               style="text-align:center;"),
                            fluidPage(
                     fluidRow(
                       column(6,
                              htmlTemplate("charts_1.html")
                            ), 
                       column(6, 
                              htmlTemplate("charts_2.html")
                              )
                     ),
                     fluidRow(column(6, 
                                     plotOutput("bar")
                                     ),
                              column(6,
                               tabsetPanel(type = "tabs",
                                           tabPanel("All Counties", plotOutput("Agg")),
                                           tabPanel("By Quartile", plotOutput("Quart")), 
                                           tabPanel("Best Counties", tableOutput("Best"))
                              )
                            )
                        )
                     ) 
                   ), 
                   tabPanel("About",
                            tags$div(
                              titlePanel("About the Data / About the Dude"),
                              style="text-align:center;"),
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
