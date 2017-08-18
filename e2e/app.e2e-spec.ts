import { ShowTartoPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('-= Show tarto app - E2E tests =-', () => {

  let page: ShowTartoPage;

  let navItem = element.all(by.css('md-sidenav h3'));
  let menuButton = element(by.css('.mat-toolbar-row > .mat-icon-button'));

  beforeEach(() => {
    page = new ShowTartoPage();
  });

  describe('Search input - exists, type, placeholder', () => {

    it('Should have a search input', done => {
      page.navigateTo();
      page.getSearchInput()
        .then(element => expect(element).toBeTruthy())
        .then(done, done.fail);
    });

    it('Should have a search input type = search', done => {
      page.navigateTo();
      page.getSearchType()
        .then(element => expect(element).toEqual("search"))
        .then(done, done.fail);
    });

    it('Should have a search input placeholder = Search show', done => {
      page.navigateTo();
      page.getSearchPlaceholder()
        .then(element => expect(element).toEqual('Search show'))
        .then(done, done.fail);
    });
  });

  describe('Toolbar and title', () => {

    it('Should have a toolbar', done => {
      page.navigateTo();
      page.getToolbar()
        .then(element => expect(element).toBeTruthy())
        .then(done, done.fail);
    });

    it('Should have a toolbar title = ShowTarto', done => {
      page.navigateTo();
      page.getTitle()
        .then(msg => expect(msg).toEqual('ShowTarto'))
        .then(done, done.fail);
    });
  });

  describe('Get Content and behavior', () => {

    it('Should have a Popular items total = 10', done => {
      page.navigateTo();
      page.getPopular()
        .then(list => expect(list).toBe(10))
        .then(done, done.fail);
    });

    it('Should be closed the Sidenav, when Startpage loaded', done => {
      page.navigateTo();
      page.sideNav()
        .then(element => expect(element).toBeFalsy())
        .then(done, done.fail);
    })
  });

  describe('Sidenav issues', () => {

    describe('Navbar issues', () => {

      it('Nav menu category item count = 4', done => {
        page.navigateTo();
        page.openSideNav()

        navItem.then(function (items) {
          expect(items.length).toBe(4);
        })
          .then(done, done.fail);
      });

      it('First category name = Home', done => {
        page.navigateTo();
        page.openSideNav()
        navItem.then(function (items) {
          expect(items[0].getText()).toBe('HOME');
        })
          .then(done, done.fail);
      });

      it('Second category name = Movies', done => {
        page.navigateTo();
        page.openSideNav()
        navItem.then(function (items) {
          expect(items[1].getText()).toBe('MOVIES');
        })
          .then(done, done.fail);
      });

      it('Third category name = Series', done => {
        page.navigateTo();
        page.openSideNav()
        navItem.then(function (items) {
          expect(items[2].getText()).toBe('SERIES');
        })
          .then(done, done.fail);
      });

      it('Last category name = About', done => {
        page.navigateTo();
        page.openSideNav()
        navItem.then(function (items) {
          expect(items[3].getText()).toBe('ABOUT');
        })
          .then(done, done.fail);
      });

    });
  });
});
