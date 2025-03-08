import { Component } from '@angular/core';

@Component({
  selector: 'app-donwload-button',
  imports: [],
  templateUrl: './donwload-button.component.html',
  styleUrl: './donwload-button.component.css'
})
export class DonwloadButtonComponent {

  wasClicked: boolean = false;
  buttonText: string = 'Download CV';


  CurriculumDownload(){
    if(!this.wasClicked){

      this.wasClicked = true;
      this.buttonText = 'Thank you! 🎉'

      const fileUrl = encodeURI('assets/shared/Igor Loureiro - Desenvolvedor Web.pdf');

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'Igor Loureiro - Web Developer (PDF).pdf';

      link.click();
    }
  }
}
