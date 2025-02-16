import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  imports: [],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent implements AfterViewInit {

  IsReptileOn: boolean = true;
  imagePath = 'assets/shared/IgorImage.jpg';

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      const script = this.renderer.createElement('script');
      script.src = 'scripts/creature.js';
      script.type = 'text/javascript';
      this.renderer.appendChild(this.el.nativeElement, script);
    }
  }
  
}
