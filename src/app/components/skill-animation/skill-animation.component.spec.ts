import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAnimationComponent } from './skill-animation.component';

describe('SkillAnimationComponent', () => {
  let component: SkillAnimationComponent;
  let fixture: ComponentFixture<SkillAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
