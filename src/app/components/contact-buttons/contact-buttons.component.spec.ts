import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactButtonsComponent } from './contact-buttons.component';

describe('ContactButtonsComponent', () => {
  let component: ContactButtonsComponent;
  let fixture: ComponentFixture<ContactButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
