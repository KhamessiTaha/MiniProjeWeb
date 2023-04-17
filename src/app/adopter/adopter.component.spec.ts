import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopterComponent } from './adopter.component';

describe('AdopterComponent', () => {
  let component: AdopterComponent;
  let fixture: ComponentFixture<AdopterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdopterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdopterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
