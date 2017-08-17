import { ShowTartoPage } from './app.po';

describe('-= Show tarto app - E2E tests =-', () => {
  let page: ShowTartoPage;

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

      page.sideNavClosed()
        .then(element => expect(element).toBeTruthy())
        .then(done, done.fail);
    })
  });
});
