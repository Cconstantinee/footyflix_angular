import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login-wallpaper',
  templateUrl: './login-wallpaper.component.html',
  styleUrl: './login-wallpaper.component.css'
})
export class LoginWallpaperComponent implements OnInit {
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
}
