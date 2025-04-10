import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribtionTutorialComponent } from './subscribtion-tutorial.component';

describe('SubscribtionTutorialComponent', () => {
  let component: SubscribtionTutorialComponent;
  let fixture: ComponentFixture<SubscribtionTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribtionTutorialComponent]
    });
    fixture = TestBed.createComponent(SubscribtionTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
