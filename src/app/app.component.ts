import { Component } from '@angular/core';
import { AuthService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'footyflix_angular';
  imageUrl: string = '';
  title_varient:string='front_title';
  matchMakerOn:boolean=false;
  
  
  ConsolesActive: boolean=false;

  constructor(public authService:AuthService ){}

  handleButtons(input:string){
    switch (input) {
      case 'open_teams_console':
          this.title_varient='teams_console_title'
          this.ConsolesActive=true;
        break;
      case 'open_main_page' :
        this.title_varient='front_title';
        console.log("title_variant changed: ",this.title_varient);
        break;
      case 'open-login' :
        this.title_varient='login-register';
      break;
      case 'open_profile':
        this.title_varient="profile_page";
        
        break;
        case 'open_admin_page':
          this.title_varient="admin_page";
          
          break;
      default:
        break;
        
    }
  }

  handleMessages($event: any) {
    this.matchMakerOn=$event;
  
  }
wallpaperSwitch(): string {
    if(this.matchMakerOn){
      return 'match_maker-console';
    }
    else{
      return this.title_varient;
    }
  }

}