import { ShowTartoPage } from './app.po';

describe('show-tarto App', () => {
  let page: ShowTartoPage;

  beforeEach(() => {
    page = new ShowTartoPage();
  });

  it('should have a title', done => {
    page.navigateTo();

    page.getTitle()
      .then(msg => expect(msg).toEqual('ShowTarto'))
      .then(done, done.fail);
  });

  it('Get Popular items equal 5', done => {
    page.navigateTo();

    page.getPopular()
      .then(list => expect(list).toBe(5))
      .then(done, done.fail);
  });
});
