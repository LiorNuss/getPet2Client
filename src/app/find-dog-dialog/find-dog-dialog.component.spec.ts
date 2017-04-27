import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDogDialogComponent } from './find-dog-dialog.component';

describe('FindDogDialogComponent', () => {
  let component: FindDogDialogComponent;
  let fixture: ComponentFixture<FindDogDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDogDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
