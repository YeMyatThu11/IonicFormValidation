import { Component, OnInit } from '@angular/core';
import {LoginDataService} from '../../../login-data-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userLists;
  constructor(private lgData: LoginDataService) { }

  ngOnInit() {
    this.userLists=this.lgData.LoginUserData;
  }

}
