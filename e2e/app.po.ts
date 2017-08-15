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

  getSideNav() {
    return element(by.model('md-sidenav-container'));
  }
}
