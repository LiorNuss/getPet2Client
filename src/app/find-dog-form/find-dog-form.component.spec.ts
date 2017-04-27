import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDogFormComponent } from './find-dog-form.component';


describe('FindDogFormComponent', () => {
  let component: FindDogFormComponent;
  let fixture: ComponentFixture<FindDogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
