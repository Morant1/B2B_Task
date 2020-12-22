export class User {

    constructor(public _id:number,public personal_id:number,public firstname: string,public lastname:string, public email: string, public password: string,
      public birth: string,public phone: string,public account: string,public companyname: string) {
        
    }
  }