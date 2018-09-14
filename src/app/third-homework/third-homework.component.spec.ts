import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdHomeworkComponent } from './third-homework.component';

describe('ThirdHomeworkComponent', () => {
  let component: ThirdHomeworkComponent;
  let fixture: ComponentFixture<ThirdHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
