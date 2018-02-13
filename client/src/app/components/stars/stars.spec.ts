import {TestBed, async} from '@angular/core/testing';
import StarsComponent from './stars';

describe('starsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StarsComponent]
    })
    .compileComponents();
  }));

  it('jest pomyślnie wstrzykiwany', () => {
    let component = TestBed.createComponent(StarsComponent).componentInstance;
    expect(component instanceof StarsComponent).toEqual(true);
  });

  it('właściwość readonly domyślnie ma wartość true', () => {
    let component = TestBed.createComponent(StarsComponent).componentInstance;
    expect(component.readonly).toEqual(true);
  });

  it('wszystkie gwiazdki są puste', () => {
    let fixture = TestBed.createComponent(StarsComponent);
    let element = fixture.nativeElement;
    let cmp = fixture.componentInstance;
    cmp.rating = 0;

    fixture.detectChanges();

    let selector = '.glyphicon-star-empty';
    expect(element.querySelectorAll(selector).length).toBe(5);
  });

  it('wszystkie gwiazdki są wypełnione', () => {
    let fixture = TestBed.createComponent(StarsComponent);
    let element = fixture.nativeElement;
    let cmp = fixture.componentInstance;
    cmp.rating = 5;

    fixture.detectChanges();

    let selector = '.glyphicon-star:not(.glyphicon-star-empty)';
    expect(element.querySelectorAll(selector).length).toBe(5);
  });

  it('emituje zdarzenie zmiany oceny, gdy readonly ma wartość false', async(() => {
    let component = TestBed.createComponent(StarsComponent).componentInstance;
    component.ratingChange.subscribe(r => {
      expect(r).toBe(3);
    });
    component.readonly = false;
    component.fillStarsWithColor(2);
  }));
});
