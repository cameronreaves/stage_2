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
                            sidebarLayout(
                                sidebarPanel(
                                    selectInput("variable",
                                                "States:",
                                                include), 
                                          width = 2
                                            ),
                                    mainPanel(
                                        plotOutput("state"), 
                                        tableOutput("top_10")
                                             )
                                        )
                            ),
                   tabPanel("You Choose"),
                   tabPanel("About")
               )
    )
