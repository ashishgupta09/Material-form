import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material-form';
  url="https://dummyjson.com/users";
 
  

  @ViewChild('myForm')Form!: NgForm;

  constructor(private http: HttpClient){
  }
  
     users:string[]=[];
     displayedcloumns:string[]=['id','firstName','lastName','maidenName','age'];
     dataSource:MatTableDataSource<any>=new MatTableDataSource<any>();

  ngOnInit() {
    this.http.get<any>(this.url).subscribe((data) => {
      this.users=data.users;
      this.dataSource = new MatTableDataSource<any>(this.users);
      console.log(this.dataSource);
    });

   }
    


}
