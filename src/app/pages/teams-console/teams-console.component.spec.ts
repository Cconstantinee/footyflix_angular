import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsConsoleComponent } from './teams-console.component';

describe('TeamsConsoleComponent', () => {
  let component: TeamsConsoleComponent;
  let fixture: ComponentFixture<TeamsConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsConsoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamsConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
