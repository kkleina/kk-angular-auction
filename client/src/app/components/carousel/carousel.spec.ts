import CarouselComponent from './carousel';

describe('CarouselComponent', () => {
  it('jest pomyślnie instancjonowany', () => {
    const component = new CarouselComponent();
    expect(component instanceof CarouselComponent).toEqual(true);
  });
});
