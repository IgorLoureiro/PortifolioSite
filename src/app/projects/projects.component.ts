import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ObjectEncodingOptions } from 'fs';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  private isBrowser!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: ObjectEncodingOptions) {
    this.isBrowser = isPlatformBrowser(this.platformId);
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
