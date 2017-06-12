import { ShowTartoPage } from './app.po';

describe('show-tarto App', () => {
  let page: ShowTartoPage;

  beforeEach(() => {
    page = new ShowTartoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
