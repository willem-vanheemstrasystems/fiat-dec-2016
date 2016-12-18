import { UserMgtPage } from './app.po';

describe('user-mgt App', function() {
  let page: UserMgtPage;

  beforeEach(() => {
    page = new UserMgtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
