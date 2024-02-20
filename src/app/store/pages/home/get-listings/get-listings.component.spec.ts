import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListingsComponent } from './get-listings.component';

describe('GetListingsComponent', () => {
  let component: GetListingsComponent;
  let fixture: ComponentFixture<GetListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetListingsComponent]
    });
    fixture = TestBed.createComponent(GetListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
