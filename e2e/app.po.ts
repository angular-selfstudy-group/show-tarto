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

  sideNavClosed() {
    return element(by.css('.mat-sidenav-closed')).isPresent();
  }


  sideNavOpened() {
    return element(by.css('mat-sidenav-opened')).isDisplayed();
  }
}
