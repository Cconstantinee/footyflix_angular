import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerSearchComponent } from './components/player-search/player-search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { FrontPageButtonComponent } from './components/front-page-button/front-page-button.component';
import { FrontStadiumButtonComponent } from './components/front-stadium-button/front-stadium-button.component';
import { FrontNewsButtonComponent } from './components/front-news-button/front-news-button.component';
import { TitleCardComponent } from './components/title-card/title-card.component';
import { NavigationDeckComponent } from './components/navigation-deck/navigation-deck.component';
import { TeamsConsoleComponent } from './pages/teams-console/teams-console.component';
import { MatchesConsoleComponent } from './pages/matches-console/matches-console.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TeamFormComponent } from './components/team-form/team-form.component';
import {PlayersService} from './services/player-services.service';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { TeamViewerComponent } from './components/team-viewer/team-viewer.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { BackdropComponent } from './pages/backdrop/backdrop.component';
import { WallpapersComponent } from './pages/wallpapers/wallpapers.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminToggleComponent } from './components/admin-toggle/admin-toggle.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginWallpaperComponent } from './components/login-wallpaper/login-wallpaper.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';
import { JwtInterceptor } from './services/token.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TeamEditFormComponent } from './components/team-edit-form/team-edit-form.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
const routes:Routes=[
  {path:'login-register',component:LoginRegisterComponent},
  {path:'front-page',component:FrontPageButtonComponent},
  {path:'admin-page',component:AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    PlayerSearchComponent,
    NavbarComponent,
    FrontPageComponent,
    FrontPageButtonComponent,
    FrontStadiumButtonComponent,
    FrontNewsButtonComponent,
    TitleCardComponent,
    NavigationDeckComponent,
    TeamsConsoleComponent,
    MatchesConsoleComponent,
    TeamFormComponent,
    LoginRegisterComponent,
    TeamViewerComponent,
    TeamCardComponent,
    BackdropComponent,
    WallpapersComponent,
    LoginComponent,
    ProfilComponent,
    AdminToggleComponent,
    ProfileViewComponent,
    ProfilePageComponent,
    LoginWallpaperComponent,
    AdminComponent,
    LoginTestComponent,
    TeamEditFormComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSnackBarModule,MatInputModule,
    MatButtonModule,
    NgSelectModule, FormsModule,ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule,NgbModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [PlayersService,AuthGuard,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
