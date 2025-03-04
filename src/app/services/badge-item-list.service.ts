import { Injectable } from '@angular/core';
import { BadgeInformation } from '../models/badge-information.model';

@Injectable({
  providedIn: 'root'
})
export class BadgeItemListService {

  constructor() { }

  private static BadgeItensList: BadgeInformation[] = [
    {imagem: 'assets/shared/angular-icon-svgrepo-com.svg', name: 'Angular', description: 'Front-End Framework'},
    {imagem: 'assets/shared/csharp-svgrepo-com.svg', name: 'CSharp (.NET)', description: 'Back-End Language'},
    {imagem: 'assets/shared/html-5-svgrepo-com.svg', name: 'HTML', description: 'Markup Language'},
    {imagem: 'assets/shared/css-3-svgrepo-com.svg', name: 'CSS', description: 'Stylization Language'},
    {imagem: 'assets/shared/java-svgrepo-com.svg', name: 'Java', description: 'Back-End Language'},
    {imagem: 'assets/shared/javascript-svgrepo-com.svg', name: 'Javascript', description: 'Front-End Language'},
    {imagem: 'assets/shared/node-js-svgrepo-com.svg', name: 'Node.JS', description: 'Back-End Language'},
    {imagem: 'assets/shared/typescript-svgrepo-com.svg', name: 'Typescript', description: 'Javascript Super Set'},
    {imagem: 'assets/shared/python-svgrepo-com.svg', name: 'Python', description: 'Back-End Language'},
    {imagem: 'assets/shared/sql-database-sql-azure-svgrepo-com.svg', name: 'SQL', description: 'Structured Query Language'},
    {imagem: 'assets/shared/azure-devops-svgrepo-com.svg', name: 'Microsoft Azure', description: 'Computação em nuvem'},
    {imagem: 'assets/shared/aws-svgrepo-com.svg', name: 'AWS', description: 'Computação em nuvem'},
  ]

  public static getItems(): BadgeInformation[] {
    return this.BadgeItensList;
  }

}
