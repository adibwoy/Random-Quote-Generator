import { RandomQuoteGeneratorPage } from './app.po';

describe('random-quote-generator App', () => {
  let page: RandomQuoteGeneratorPage;

  beforeEach(() => {
    page = new RandomQuoteGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
