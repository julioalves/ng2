import { CursoAngular23Page } from './app.po';

describe('curso-angular23 App', () => {
  let page: CursoAngular23Page;

  beforeEach(() => {
    page = new CursoAngular23Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
