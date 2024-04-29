import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWallpaperComponent } from './login-wallpaper.component';

describe('LoginWallpaperComponent', () => {
  let component: LoginWallpaperComponent;
  let fixture: ComponentFixture<LoginWallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginWallpaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
