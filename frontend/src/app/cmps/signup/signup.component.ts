import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 @Output() onSignup = new EventEmitter();
 @Output() onLogin = new EventEmitter();
 @Input() userMsg: boolean;
  signup = {
    personal_id: '',
    password: ''
  }
  login = {
    personal_id: '',
    password: ''
  }

  isSignup = true
  constructor() { }

  ngOnInit(): void {
  }

  toggleSignup(val:boolean) : void {
    this.isSignup = val;
  }


}
