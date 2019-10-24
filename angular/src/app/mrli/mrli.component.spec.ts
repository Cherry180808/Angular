import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrliComponent } from './mrli.component';

describe('MrliComponent', () => {
  let component: MrliComponent;
  let fixture: ComponentFixture<MrliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
