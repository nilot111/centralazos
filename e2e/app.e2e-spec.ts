import { CentralazosPage } from './app.po';

describe('centralazos App', () => {
  let page: CentralazosPage;

  beforeEach(() => {
    page = new CentralazosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
