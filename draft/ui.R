#
# This is the user-interface definition of a Shiny web application. You can
# run the application by clicking 'Run App' above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

library(shiny)

# Define UI for application that draws a histogram
shinyUI(
    navbarPage("Sea Level Rise",
                   tabPanel("By State", 
                            titlePanel("State"),
                            fluidPage(
                              fluidRow(
                                column(2,
                                         selectInput("variable",
                                                     "States:",
                                                     include)
                                ),
                                column(5,
                                        plotOutput("state")
                                ), 
                                column(5, 
                                       tableOutput("top_pos"), 
                                       tags$br(),
                                       tableOutput("top_neg")
                                       )
                              )
                            )
                            ),
                   tabPanel("You Choose"),
                   tabPanel("About")
               )
    )

# 
# fluidPage(
#   fluidRow(
#     column(2,
#            "sidebar"
#     ),
#     column(10,
#            "main"
#     )
#   )
# )
# 
# sidebarPanel(
#   selectInput("variable",
#               "States:",
#               include)
# ),
# mainPanel(
#   plotOutput("state"),
#   tableOutput("top_10")
# )
