import { BirdSpotterPage } from './app.po';

describe('bird-spotter App', () => {
  let page: BirdSpotterPage;

  beforeEach(() => {
    page = new BirdSpotterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
