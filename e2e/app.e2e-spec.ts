import { SassyProjectPage } from './app.po';

describe('sassy-project App', () => {
  let page: SassyProjectPage;

  beforeEach(() => {
    page = new SassyProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
