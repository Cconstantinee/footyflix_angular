import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageButtonComponent } from './front-page-button.component';

describe('FrontPageButtonComponent', () => {
  let component: FrontPageButtonComponent;
  let fixture: ComponentFixture<FrontPageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontPageButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontPageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
