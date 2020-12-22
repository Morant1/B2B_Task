import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  banks = [[],[],[]]
  loggedInUser = null;
  banksInfo = [];
  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getCurrUser().subscribe(loggedInUser => {
      this.loggedInUser = loggedInUser;
    })
  }

  addInput() {
    this.banks.push([]);
  }

  removeInput({ id, idx }) {
    const banks = this.banks;
    const banksInfo = this.banksInfo;

    console.log(id, idx)
    if (this.banks.length === 1) return;

    const bankIdx = banksInfo.findIndex(bank => bank.id === id)
    if (bankIdx !== -1) banksInfo.splice(bankIdx, 1)
    banks.splice(idx, 1)

    this.banks = banks;
    this.banksInfo = banksInfo;

  }

  retrive(bankInfo) {
    const idx = this.banksInfo.findIndex(bank => bank.id === bankInfo.id)
    if (idx === -1) this.banksInfo.push(bankInfo);
    else this.banksInfo.splice(idx, 1, bankInfo)
  }

  goBack(){
    this.router.navigateByUrl('/info');
  }

  async onUpdate() {
    console.log("Banking data to update:",this.banksInfo)

    const user = {...this.loggedInUser};
    user.bankingInfo = this.banksInfo;
    
    const updatedUser = await this.httpService.updateUser(user);
    updatedUser.subscribe(user=>{
      console.log("updatedUser: ",user)
    })
  }

}
