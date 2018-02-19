import FooterComponent from './footer';

describe('FooterComponent', () => {
  it('jest pomyślnie instancjonowany', () => {
    const component = new FooterComponent();
    expect(component instanceof FooterComponent).toEqual(true);
  });
});
