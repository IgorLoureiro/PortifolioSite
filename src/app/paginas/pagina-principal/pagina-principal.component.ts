import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DonwloadButtonComponent } from "../../components/donwload-button/donwload-button.component";
import { ContactButtonsComponent } from "../../components/contact-buttons/contact-buttons.component";
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-pagina-principal',
  imports: [NgxTypedJsModule, DonwloadButtonComponent, ContactButtonsComponent],
  templateUrl: './pagina-principal.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent implements AfterViewInit {

  IsReptileOn: boolean = true;
  imagePath = 'assets/shared/IgorImage.jpg';
  isBrowser!: boolean;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
      const script = this.renderer.createElement('script');
      script.src = 'scripts/creature.js';
      script.type = 'text/javascript';
      this.renderer.appendChild(this.el.nativeElement, script);
    }
  }

  triggerConfetti() {
    // Explosão central subindo do fundo até o topo e caindo
    confetti({
      particleCount: 300,
      spread: 90,
      startVelocity: 80,
      gravity: 1,
      origin: { x: 0.5, y: 1 },
      scalar: 1 // Reduzindo o tamanho das partículas
    });
  
    // Explosão do canto esquerdo subindo até o topo e indo para o meio
    confetti({
      particleCount: 300,
      angle: 75,
      spread: 60,
      startVelocity: 80,
      gravity: 1,
      origin: { x: 0, y: 1 },
      scalar: 1
    });
  
    // Explosão do canto direito subindo até o topo e indo para o meio
    confetti({
      particleCount: 300,
      angle: 105,
      spread: 60,
      startVelocity: 80,
      gravity: 1,
      origin: { x: 1, y: 1 },
      scalar: 1
    });
  }
  
}
