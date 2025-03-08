import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, NgZone, PLATFORM_ID, ViewChild } from '@angular/core';
import { BadgeInformation } from '../../models/badge-information.model';
import { BadgeItemListService } from '../../services/badge-item-list.service';
import Matter, { Events } from 'matter-js';
import { Engine, Render, World, Bodies, Mouse, MouseConstraint } from 'matter-js';
import { AlternateGravityButtonComponent } from "../../components/alternate-gravity-button/alternate-gravity-button.component";
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-skill-page',
  templateUrl: './skill-page.component.html',
  styleUrl: './skill-page.component.css',
  imports: [AlternateGravityButtonComponent, TooltipModule]
})
export class SkillPageComponent {

  BadgeItensList!: BadgeInformation[];
  private engine!: Engine;
  private render!: Render;
  private isBrowser!: boolean;
  MoonGravity: boolean = false;
  LastClicked: string = "";
  onClickControl: number = 0;
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: object, private ngZone: NgZone) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
    

  ngOnInit(){
    this.BadgeItensList = BadgeItemListService.getItems();
    if(this.isBrowser){
      this.initEngine();
    }
  }

  ngAfterViewInit(){
    if (isPlatformBrowser(this.platformId)) {
      var canvas = document.getElementById("creatureCanvas");
      if(canvas){
        canvas.remove();
      }
    }
  }

  initEngine(){
    const { nativeElement } = this.canvasContainer;

    this.engine = Engine.create();
    this.engine.timing.timeScale = 1;
    const world = this.engine.world;

    const width = window.innerWidth - 40;
    const height = window.innerHeight - 69;

    this.render = Render.create({
      element: nativeElement,
      engine: this.engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
      }
    });

    const thickness = 1000;

    const ground = Bodies.rectangle(width / 2, height + thickness / 2, width * 2, thickness, { isStatic: true });
    const leftWall = Bodies.rectangle(-thickness / 2, height / 2, thickness, height * 2, { isStatic: true });
    const rightWall = Bodies.rectangle(width + thickness / 2, height / 2, thickness, height * 2, { isStatic: true });
    const ceiling = Bodies.rectangle(width / 2, -thickness / 2, width * 2, thickness, { isStatic: true });

    var skills: any = [];

    this.BadgeItensList.forEach((badgeItem) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
    
      const objectWidth = 130;
      const objectHeight = 130;
    
      const randomX = Math.random() * (width - objectWidth) + objectWidth / 2;
      const randomY = Math.random() * -height * 0.5; // Começa um pouco acima da tela
      const randomAngle = Math.random() * Math.PI * 2;
    
      var itemBody = Bodies.rectangle(randomX, randomY, 160, 160, {
        restitution: 0.8, 
        angle: randomAngle,  
        render: { 
          fillStyle: "#4d79ff", 
          sprite: {
            texture: badgeItem.imagem,
            xScale: 0.25,
            yScale: 0.25,
          } 
        }
      });
  
      (itemBody as any).objectName = badgeItem.name;

      skills.push(itemBody);
    });

    const mouse = Mouse.create(this.render.canvas);
    const mouseConstraint = MouseConstraint.create(this.engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });

    Events.on(mouseConstraint, "mousedown", (event) => {
      const mousePosition = event.mouse.position;
    
      for (const body of skills) {
        if (Matter.Bounds.contains(body.bounds, mousePosition)) {
          this.LastClicked = (body as any).objectName;
          break;
        }
      }
    });

    World.add(world, [ground, leftWall, rightWall, ceiling, ...skills, mouseConstraint]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, this.engine);
    Render.run(this.render);
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.destroyMatter();
    }
  }

  private destroyMatter(): void {
    if (this.render) {
      Render.stop(this.render);
      World.clear(this.engine.world, false);
      Engine.clear(this.engine);
      this.render.canvas.remove();
    }
  }

  changeGravity(){
    this.onClickControl++;
    if(this.onClickControl % 2 == 0){
      this.MoonGravity = !this.MoonGravity;
      if(this.MoonGravity){
        this.engine.timing.timeScale = 0.15;
      } else{
        this.engine.timing.timeScale = 1;
      }
    }
  }

}
