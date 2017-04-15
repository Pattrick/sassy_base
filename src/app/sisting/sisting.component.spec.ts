import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistingComponent } from './sisting.component';

describe('SistingComponent', () => {
  let component: SistingComponent;
  let fixture: ComponentFixture<SistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
