import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonnerComponent } from './abandonner.component';

describe('AbandonnerComponent', () => {
  let component: AbandonnerComponent;
  let fixture: ComponentFixture<AbandonnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbandonnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbandonnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
