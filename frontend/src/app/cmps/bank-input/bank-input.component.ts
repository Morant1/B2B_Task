import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-bank-input',
  templateUrl: './bank-input.component.html',
  styleUrls: ['./bank-input.component.scss']
})
export class BankInputComponent implements OnInit {
  @Output() onRemove = new EventEmitter();
  @Output() onRetrive = new EventEmitter();
  @Input() idx;
  bankInfo = {
    id: '',
    bankname: 'פועלים',
    branch: '',
    account: ''
  };
  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.bankInfo.id = this.utilsService.getRandomId();

  }


}
