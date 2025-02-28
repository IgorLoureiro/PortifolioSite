import { Injectable } from '@angular/core';
import { BadgeInformation } from '../models/badge-information.model';

@Injectable({
  providedIn: 'root'
})
export class BadgeItemListService {

  constructor() { }

  private static BadgeItensList: BadgeInformation[] = [
    {imagem: 'assets/shared/angular-icon-svgrepo-com.svg', name: 'Angular', description: 'Front-End Framework'},
    {imagem: 'assets/shared/csharp-svgrepo-com.svg', name: 'CSharp(.NET)', description: 'Back-End Language'},
    {imagem: 'assets/shared/html-5-svgrepo-com.svg', name: 'HTML', description: 'Markup Language'},
    {imagem: 'assets/shared/css-3-svgrepo-com.svg', name: 'CSS', description: 'Stylization Language'},
    {imagem: 'assets/shared/java-svgrepo-com.svg', name: 'Java', description: 'Back-End Language'},
    {imagem: 'assets/shared/javascript-svgrepo-com.svg', name: 'Javascript', description: 'Front-End Language'},
  ]

  public static getItems(): BadgeInformation[] {
    return this.BadgeItensList;
  }

}
