import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabiolaComponent } from './fabiola.component';

describe('FabiolaComponent', () => {
  let component: FabiolaComponent;
  let fixture: ComponentFixture<FabiolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabiolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabiolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
