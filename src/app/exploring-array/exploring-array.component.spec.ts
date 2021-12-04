import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploringArrayComponent } from './exploring-array.component';

describe('ExploringArrayComponent', () => {
  let component: ExploringArrayComponent;
  let fixture: ComponentFixture<ExploringArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploringArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploringArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
