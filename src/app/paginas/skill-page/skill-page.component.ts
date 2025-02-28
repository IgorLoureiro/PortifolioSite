import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LanguageBadgeComponent } from "../../components/language-badge/language-badge.component";
import { BadgeInformation } from '../../models/badge-information.model';
import { BadgeItemListService } from '../../services/badge-item-list.service';

@Component({
  selector: 'app-skill-page',
  templateUrl: './skill-page.component.html',
  styleUrl: './skill-page.component.css',
  imports: [LanguageBadgeComponent]
})
export class SkillPageComponent {

  BadgeItensList!: BadgeInformation[];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ){
    
  }

  ngOnInit(){
    this.BadgeItensList = BadgeItemListService.getItems();
    console.log(this.BadgeItensList)
  }

  ngAfterViewInit(){
    if (isPlatformBrowser(this.platformId)) {
      var canvas = document.getElementById("creatureCanvas");
      if(canvas){
        canvas.remove();
      }
    }
  }


}
