import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSingleComponent } from './stock-single.component';

describe('StockSingleComponent', () => {
  let component: StockSingleComponent;
  let fixture: ComponentFixture<StockSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
