import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails: any = []
   data:any={}
  constructor() { }
  saveData(uname:any,address:any,role:any,phone:any,gender:any){
// console.log(uname);
// console.log(address);
// console.log(role);
// console.log(phone);
// console.log(gender);


 

 
  this.data={
    uname,
    address,
    role,
    phone,
    gender
  }
  console.log(this.data);
  this.userDetails.push(this.data);

   let arrayString = JSON.stringify(this.userDetails);


    localStorage.setItem("data", arrayString);

  return true
}

}
