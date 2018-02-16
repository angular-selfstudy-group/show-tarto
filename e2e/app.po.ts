import { browser, by, element } from 'protractor';

let searchInput = element(by.css('.mat-input-element'));
let sideNav = element(by.css('mat-sidenav'));
let menuButton = element(by.css('.mat-toolbar-row > .mat-icon-button'));

export class ShowTartoPage {

  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getPopular() {
    return element.all(by.css('st-moviecard')).count();
  }

  getToolbar() {
    return element(by.css('mat-toolbar-row')).isDisplayed();
  }

  getSearchInput() {
    return searchInput.isDisplayed();
  }

  getSearchPlaceholder() {
    return searchInput.getAttribute('placeholder');
  }

  getSearchType() {
    return searchInput.getAttribute('type');
  }

  sideNav() {
    return sideNav.isDisplayed();
  }

  openSideNav() {
    return menuButton.click()
  }
}
