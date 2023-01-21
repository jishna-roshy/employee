import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uname="";
  address="";
  role="";
  gender="";
  phone="";

  saveData(){
    alert('submiited');
//     let data=[{uname:"jishna",address:"murigampurath h edavanakad p.o",role:"developer",phone:"8138815955",gender:"female"},
//     {uname:"reethu",address:"pcas h abc p.o",role:"developer",phone:"81333333",gender:"female"},
//   ];

// let arrayString = JSON.stringify(data);


// localStorage.setItem("data", arrayString);
  }
 
  
  constructor() {
    
   }

  ngOnInit(): void {
  }
  unameChange(event:any){
    this.uname=(event.target.value);
    console.log(this.uname);
  }
  addressChange(event:any){
    this.address=(event.target.value);
    console.log(this.address);
  }
  phoneChange(event:any){
    this.phone=(event.target.value);
    console.log(this.phone);
  }

  genderChange(event:any){
    this.gender=(event.target.value);
    console.log(this.gender);
  }
 roleChange(event:any){
    this.role=(event.target.value);
    console.log(this.role);
  }

}
