import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {

  @Input() players:any[]=[];

//display selected value on console-------------------------
/*onSelectionChange(val:number|null) {
  console.log('change accured',val);
  this.sendMessage(val);
}
*/
//Initiate the form and the service----------------------------------------------------
constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    

    this.frm = this.fb.group({
      'players': []
    });
  }

//---------------------------------------------------------
  @Output() messageEvent = new EventEmitter<number|null>();
  selectedPlayer: number | null = null; // Change the type to number and initialize with null
//emitting message to external form------------------------------
 sendMessage(user_id:number|null){
  
  console.log('sending user id', user_id);
  this.messageEvent.emit(user_id);

 } 

  
/*
  sendMessage() {
    if (this.selectedPlayer !== null) { // Check if selectedCar is not null
      const selectedPlayerId = this.selectedPlayer;
      const selectedPlayerName = this.players.find(car => car.id === selectedPlayerId)?.name;
      if (selectedPlayerName) {
        this.messageEvent.emit(selectedPlayerName);
        console.log("Selected player:", selectedPlayerName, " " ,selectedPlayerId);
      }
    }
  }

 /* isSubmitted = false;
  onPost = () => this.isSubmitted = true;
*/
  frm!: FormGroup;

  
//this is the function to get players from the API-------------------
  

}
