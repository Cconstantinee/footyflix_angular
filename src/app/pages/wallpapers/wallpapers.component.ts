import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-wallpapers',
  templateUrl: './wallpapers.component.html',
  styleUrl: './wallpapers.component.css'
})
export class WallpapersComponent {
  @Input() title:string='default';
  display_image:string='../../../assets/stadium_lights.png';

  setImage(){
    switch (this.title) {
      case 'front_title':
        this.display_image='../../../assets/stadium_lights.png';
        break;
      case 'teams_console_title':
        this.display_image='../../../assets/captain-background.png';
        break;
      case 'match_maker_console':
        this.display_image='../../../assets/match-background.png';
        break;
        case 'admin_console':
          this.display_image='../../../assets/admin-transformed(1).png';
          break;
        case 'login_console':
          this.display_image='../../../assets/match-background.png';
          break;
        case 'tournament_console':
          this.display_image='../../../assets/match-background.png';
          break;
        case 'profile_console':
          this.display_image='../../../assets/match-background.png';
          break;
      default:
        break;
    }
  }
}
