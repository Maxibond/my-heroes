import { TradermanPage } from './app.po';

describe('traderman App', () => {
  let page: TradermanPage;

  beforeEach(() => {
    page = new TradermanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
