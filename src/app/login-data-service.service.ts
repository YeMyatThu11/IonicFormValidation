import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  LoginUserData: { name: string, password: string }[] = [
    { "name": "yi yi", "password": "12345" }, 
    { "name": "mar mar", "password": "12345" },
    { "name": "par par", "password": "12345" }]
    addNewUser(newUser){
      this.LoginUserData.push(newUser);
    }
  constructor() { }
}
