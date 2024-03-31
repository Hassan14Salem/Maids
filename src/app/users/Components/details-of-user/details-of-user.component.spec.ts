import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfUserComponent } from './details-of-user.component';

describe('DetailsOfUserComponent', () => {
  let component: DetailsOfUserComponent;
  let fixture: ComponentFixture<DetailsOfUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsOfUserComponent]
    });
    fixture = TestBed.createComponent(DetailsOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
