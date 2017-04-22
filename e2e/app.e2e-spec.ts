import { NgCoralPage } from './app.po';

describe('ng-coral App', () => {
  let page: NgCoralPage;

  beforeEach(() => {
    page = new NgCoralPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
