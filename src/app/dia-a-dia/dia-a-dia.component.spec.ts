import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaADiaComponent } from './dia-a-dia.component';

describe('DiaADiaComponent', () => {
  let component: DiaADiaComponent;
  let fixture: ComponentFixture<DiaADiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaADiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaADiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
