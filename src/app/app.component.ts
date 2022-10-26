import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // dataCards: any[] = [];

 dataCards: any;
 // dataCards:{ colorsOrder: string[]; valuesOrder: string[] }
  title = 'cards-game-client';
  constructor(private cardService: CardService) {

  }
  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => {
      this.dataCards = cards;
      console.log('cards ! : ' + this.dataCards );
     },
      (error) => {
        console.log('Erreur ! : ' + error);
      })
  }





}
