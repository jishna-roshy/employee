import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  uname:any;

  list:any;
  valueFromStorage: any;

  constructor(private ds:DataService) { 
this.ds

  }

  ngOnInit(): void {
    this.valueFromStorage = localStorage.getItem('data');
   
    this.valueFromStorage=JSON.parse(this.valueFromStorage);
     console.log(this.valueFromStorage[0]);
  }

}
