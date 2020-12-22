import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  userInfo = {
    lastname: '',
    firstname: '',
    birth:'',
    personal_id:null,
    email:'',
    phone:'',
    account:'',
    companyname:''
  }
  loggedInUser = null

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getCurrUser().subscribe(loggedInUser => {
      this.loggedInUser = loggedInUser;

      if (!this.loggedInUser.userInfo) this.userInfo.personal_id = loggedInUser.personal_id;
      else this.userInfo = this.loggedInUser.userInfo;
    })
  }

  async onUpdateUser() {
    const user = {...this.loggedInUser};
    user.userInfo = this.userInfo;

    const updatedUser = await this.httpService.updateUser(user);
    updatedUser.subscribe(user=>{
      console.log("updatedUser",user)
      this.router.navigateByUrl('/account');
    
    })
  }

}

