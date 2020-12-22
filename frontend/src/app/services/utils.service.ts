import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public saveToStorage(key:string, val) {
    localStorage.setItem(key, JSON.stringify(val))
  }

  public loadFromStorage(key:string) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
  }

  public getRandomId() {
    var pt1 = Date.now().toString(16);
    var pt2 = this._getRandomInt(1000, 9999).toString(16);
    var pt3 = this._getRandomInt(1000, 9999).toString(16);
    return `${pt3}-${pt1}-${pt2}`.toUpperCase();
  }

  private _getRandomInt(num1, num2) {
    var max = (num1 >= num2) ? num1 + 1 : num2 + 1;
    var min = (num1 <= num2) ? num1 : num2;
    return (Math.floor(Math.random() * (max - min)) + min);
  }

}
