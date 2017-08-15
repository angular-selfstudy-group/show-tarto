#Startpage test cases:

### app-root

 * md-sidenav - hide
 * md-toolbar - show

    * md-input-container - show
    * input placeholder toEqual=Search show
    * input type = Search
    * md icon - Search

  button.mat-icon-button .click = md-sidenav-opened = isDisplayed
  **.isPresent()).toBe(true)**
    * nav count = 4
    * nav.first h3.geText = Home
    * nav h3 movies
    * nav h3 series
    * nav.last h3 getText = About

    mat-toolbar-layout mat-icon-button