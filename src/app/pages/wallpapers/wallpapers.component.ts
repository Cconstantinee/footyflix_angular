import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-wallpapers',
  templateUrl: './wallpapers.component.html',
  styleUrl: './wallpapers.component.css'
})
export class WallpapersComponent {
  @Input() title:string='default';
  display_image:string='';
  setImage(){
    switch (this.title) {
      case 'front_title':
        this.display_image='../../../assets/stadium_lights.png';
        break;
      case 'front_title':
        
        break;
      case 'front_title':
        
        break;
      default:
        break;
    }
  }
}
