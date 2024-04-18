import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { HttpClientModule } from '@angular/common/http';
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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule, FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
