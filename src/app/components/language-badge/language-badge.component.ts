import { Component, input } from '@angular/core';

@Component({
  selector: 'app-language-badge',
  imports: [],
  templateUrl: './language-badge.component.html',
  styleUrl: './language-badge.component.css'
})
export class LanguageBadgeComponent {

  name = input.required<string>();
  description = input.required<string>();
  image = input.required<string>();

  constructor(){

  }

}
