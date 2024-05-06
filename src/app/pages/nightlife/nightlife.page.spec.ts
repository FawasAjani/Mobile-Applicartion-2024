import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NightlifePage } from './nightlife.page';

describe('NightlifePage', () => {
  let component: NightlifePage;
  let fixture: ComponentFixture<NightlifePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NightlifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
