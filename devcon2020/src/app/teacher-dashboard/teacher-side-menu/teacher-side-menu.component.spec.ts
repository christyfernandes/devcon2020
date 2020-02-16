import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSideMenuComponent } from './teacher-side-menu.component';

describe('TeacherSideMenuComponent', () => {
  let component: TeacherSideMenuComponent;
  let fixture: ComponentFixture<TeacherSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
