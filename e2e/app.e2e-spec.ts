import { AngularEsriMapsPage } from './app.po';

describe('angular-esri-maps App', () => {
  let page: AngularEsriMapsPage;

  beforeEach(() => {
    page = new AngularEsriMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
