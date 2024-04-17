import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontNewsButtonComponent } from './front-news-button.component';

describe('FrontNewsButtonComponent', () => {
  let component: FrontNewsButtonComponent;
  let fixture: ComponentFixture<FrontNewsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontNewsButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontNewsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
