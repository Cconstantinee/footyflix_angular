import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDeckComponent } from './navigation-deck.component';

describe('NavigationDeckComponent', () => {
  let component: NavigationDeckComponent;
  let fixture: ComponentFixture<NavigationDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationDeckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
