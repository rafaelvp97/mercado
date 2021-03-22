import { GerenciadorDeTarefasPage } from './app.po';

describe('gerenciador-de-tarefas App', () => {
  let page: GerenciadorDeTarefasPage;

  beforeEach(() => {
    page = new GerenciadorDeTarefasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
