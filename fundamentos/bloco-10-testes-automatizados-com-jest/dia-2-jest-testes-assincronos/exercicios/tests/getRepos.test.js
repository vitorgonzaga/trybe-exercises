const getRepos = require('../functions/getRepos');



describe('(then catch aproach)', () => {
  it('if contain "sd-01-week4-5-project-todo-list" as into json retrieve', () => {
    const urlApi = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(urlApi).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-todo-list');
    });
  });
});

describe('(async await aproach)', () => {
  it('if contain "sd-01-week4-5-project-todo-list" as into json retrieve', async () => {
    const urlApi = 'https://api.github.com/orgs/tryber/repos';
    const result = await getRepos(urlApi);
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-todo-list');
  });
});