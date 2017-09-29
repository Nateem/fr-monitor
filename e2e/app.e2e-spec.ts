import { FrMonitorPage } from './app.po';

describe('fr-monitor App', () => {
  let page: FrMonitorPage;

  beforeEach(() => {
    page = new FrMonitorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
