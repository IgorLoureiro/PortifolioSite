import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonwloadButtonComponent } from './donwload-button.component';

describe('DonwloadButtonComponent', () => {
  let component: DonwloadButtonComponent;
  let fixture: ComponentFixture<DonwloadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonwloadButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonwloadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
