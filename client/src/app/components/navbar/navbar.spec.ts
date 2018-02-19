import NavbarComponent from './navbar';

describe('NavbarComponent', () => {
  it('jest pomyślnie instancjonowany', () => {
    const component = new NavbarComponent();
    expect(component instanceof NavbarComponent).toEqual(true);
  });
});
