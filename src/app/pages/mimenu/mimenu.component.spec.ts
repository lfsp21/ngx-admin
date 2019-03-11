import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimenuComponent } from './mimenu.component';

describe('MimenuComponent', () => {
  let component: MimenuComponent;
  let fixture: ComponentFixture<MimenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
