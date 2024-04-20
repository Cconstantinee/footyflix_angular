import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'footyflix_angular';
  imageUrl: string = '';
  title_varient:string='front_title';
  
  ConsolesActive: boolean=false;

  handleButtons(input:string){
    switch (input) {
      case 'open_teams_console':
          this.title_varient='teams_console_title'
          this.ConsolesActive=true;
        break;
      case 'open_main_page' :
        this.title_varient='front_title';
        
        break;
      case 'open-login' :
        this.title_varient='login-register';
      break;
      default:
        break;
    }
  }
  
}
