import ApplicationComponent from './application';

describe('ApplicationComponent', () => {
  it('jest pomyślnie instancjonowany', () => {
    const app = new ApplicationComponent();
    expect(app instanceof ApplicationComponent).toEqual(true);
  });
});
