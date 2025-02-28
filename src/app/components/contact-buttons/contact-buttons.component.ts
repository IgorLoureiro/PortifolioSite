import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-buttons',
  imports: [],
  templateUrl: './contact-buttons.component.html',
  styleUrl: './contact-buttons.component.css'
})
export class ContactButtonsComponent {

  constructor(){

  }


  goToLink(url: string){
    window.open(url, "_blank");
  }
}
