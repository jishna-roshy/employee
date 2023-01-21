import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



// uname="";
// address="";
// role="";
// phone="";
// gender="";



userDetails: any = {
  'jishna': { uname: 'jishna', address: 'abc',role:'developer', phone: '5555555555', gender:'female'},
  'reethu': { uname: 'reethu', address: 'cdf',role:'developer', phone:'1111111111' , gender:'female'},
  'aleena': { uname: 'aleena', address: 'ehg', role:'developer',phone: '2211111111' , gender:'female'},
}

role:any


empForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  address:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
 
  phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
  gender:[''],
})

saveData(){
  
//  alert('clicked');
var uname=this.empForm.value.uname;
var address=this.empForm.value.address;

var phone=this.empForm.value.phone;
var gender=this.empForm.value.gender;
console.log(uname);


if(this.empForm.valid){
  const result=this.ds.saveData(uname,address,this.role,phone,gender);
  if(result){
  alert('successfully submitted');
  this.router.navigateByUrl('list');
}else{
  alert('failed');
  this.router.navigateByUrl('');
}
}else{
  alert('failed to submitt');
}

}

    // let data=[{uname:"jishna",address:"murigampurath h edavanakad p.o",role:"developer",phone:"8138815955",gender:"female"},
    // {uname:"reethu",address:"pcas h abc p.o",role:"developer",phone:"81333333",gender:"female"},
    // ];

    // let arrayString = JSON.stringify(data);


    // localStorage.setItem("data", arrayString);



   
   
  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) {

  }

  ngOnInit(): void {
  }
  // unameChange(event: any) {
  //   this.uname = (event.target.value);
  //   console.log(this.uname);
  // }
  // addressChange(event: any) {
  //   this.address = (event.target.value);
  //   console.log(this.address);
  // }
  // phoneChange(event: any) {
  //   this.phone = (event.target.value);
  //   console.log(this.phone);
  // }

  // genderChange(event: any) {
  //   this.gender = (event.target.value);
  //   console.log(this.gender);
  // }
  // roleChange(event: any) {
  //   this.role = (event.target.value);
  //   console.log(this.role);
  // }
  onSelectionChange(event:any) {
    this.role=(event.target.value);
}

}
