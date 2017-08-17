import { browser, by, element } from 'protractor';

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
    return element(by.css('md-toolbar-row')).isPresent();
  }

  getSearchInput() {
    return element(by.css('.mat-input-element')).isPresent();
  }

  getSearchPlaceholder() {
    //Search show
    return element(by.css('.mat-input-element')).getAttribute('placeholder');
  }

  getSearchType() {
    //Search show
    return element(by.css('.mat-input-element')).getAttribute('type');
  }

  sideNavClosed() {
    return element(by.css('.mat-sidenav-closed')).isPresent();
  }

  sideNavOpened() {
    return element(by.css('mat-sidenav-opened')).isDisplayed();
  }
}
