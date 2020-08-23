import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIconChipComponent } from './custom-icon-chip.component';

describe('CustomIconChipComponent', () => {
  let component: CustomIconChipComponent;
  let fixture: ComponentFixture<CustomIconChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomIconChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIconChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
