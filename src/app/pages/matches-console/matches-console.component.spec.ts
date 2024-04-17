import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesConsoleComponent } from './matches-console.component';

describe('MatchesConsoleComponent', () => {
  let component: MatchesConsoleComponent;
  let fixture: ComponentFixture<MatchesConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchesConsoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchesConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
