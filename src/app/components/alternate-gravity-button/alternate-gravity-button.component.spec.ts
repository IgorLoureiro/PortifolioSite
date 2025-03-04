import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateGravityButtonComponent } from './alternate-gravity-button.component';

describe('AlternateGravityButtonComponent', () => {
  let component: AlternateGravityButtonComponent;
  let fixture: ComponentFixture<AlternateGravityButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternateGravityButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternateGravityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
