import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent {
  @Input() imageUrl: string="../../../assets/default-card.svg"; // Input for image URL
  showForm: boolean = false;
  text: string|undefined='';
  description: string='';
  disableHover: boolean = false; // Flag to disable hover effects when form is toggled

  onMouseOver() {
    // Check if hover effects should be disabled
    if ((this.text=='')&&(!this.showForm)) {
      this.description = 'Add player';
    }
  }

  onMouseOut() {
    // Check if hover effects should be disabled
    this.description = '';
  }

  buttonClicked(){
    this.showForm = !this.showForm;
    if (this.description!='') {
      this.description='';
    }
    this.disableHover = this.showForm;
    if((this.text!='') && (this.text!='Add player')){
      this.imageUrl='../../../assets/filled-card.svg';
    }
    else{
      this.imageUrl="../../../assets/default-card.svg";
    }
  }

  getMessage(selectedPlayer: string) {
    this.text = selectedPlayer;
    if((this.text!='') && (this.text!='Add player')){
      this.imageUrl='../../../assets/filled-card.svg';
    }
    console.log(selectedPlayer);
  }
}
