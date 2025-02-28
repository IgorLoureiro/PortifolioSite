import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageBadgeComponent } from './language-badge.component';

describe('LanguageBadgeComponent', () => {
  let component: LanguageBadgeComponent;
  let fixture: ComponentFixture<LanguageBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
