import { Component,Input,OnInit, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { interval } from 'rxjs';

@Component({
  selector: 'app-wallpapers',
  templateUrl: './wallpapers.component.html',
  styleUrl: './wallpapers.component.css',
  animations: [
    trigger('backgroundChange', [
      transition(':increment', [
        animate('1s ease-in-out', style({
          backgroundImage: '{{ newImage }}'
        }))
      ])
    ])
  ]

})
export class WallpapersComponent implements OnInit{
  second_container_images = [
    '../../../assets/stadium_background2.png',
    '../../../assets/image15.png',
    '../../../assets/image19.png'
  ];
  first_container_images = [
    '../../../assets/stadium_background2.png',
    
    '../../../assets/image18.png',
    
    '../../../assets/image17.png'
    
  ];
  currentImageIndex1: number = 0;
  currentImageIndex2: number = 0;
  intervalId: any;
  empty:string="";

  constructor() { }

  ngOnInit() {
    this.startFirstCycle();
    console.log("first cycle started");
    setTimeout(() => {
      this.startSecondCycle();
      console.log("second cycle started");
      this.second_container_images[0]='../../../assets/image16.png';
    }, 5000);
  }
  
  startFirstCycle() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex1 = (this.currentImageIndex1 + 1) % this.first_container_images.length;
    }, 10000); // Change interval value to adjust cycle speed (in milliseconds)
  }
  startSecondCycle(){
    this.intervalId = setInterval(() => {
      this.currentImageIndex2 = (this.currentImageIndex2 + 1) % this.second_container_images.length;
    }, 10000); // Change interval value to adjust cycle speed (in milliseconds)
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  @Input() title:string='default';
  display_image:string='../../../assets/captain-background.png';

  setImage(){
    console.log("setting new image",this.title);
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
        case 'admin_page':
          this.display_image='../../../assets/admin_background.png';
          break;
        case 'login_page':
          this.display_image='../../../assets/admin_background.png';
          break;
        case 'tournament_console':
          this.display_image='../../../assets/match-background.png';
          break;
        case 'profile_page':
          this.display_image='../../../assets/profile_backdrop.png';
          console.log("image set");
          break;
      default:
        break;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      // Do something when myVariable changes
      console.log('myVariable changed:', this.title);
      this.setImage();
    }
  }
}

