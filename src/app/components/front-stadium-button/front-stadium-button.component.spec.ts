import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontStadiumButtonComponent } from './front-stadium-button.component';

describe('FrontStadiumButtonComponent', () => {
  let component: FrontStadiumButtonComponent;
  let fixture: ComponentFixture<FrontStadiumButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontStadiumButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontStadiumButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
