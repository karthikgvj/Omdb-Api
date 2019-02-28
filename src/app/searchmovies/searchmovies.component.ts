import { Component, OnInit, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.css']
})
export class SearchmoviesComponent implements OnInit {

  
 type = ['movie','series','episode'];
 response: any;
 linkArray = [];


 userModel = new User('', '', '', 'movie');
 errorMsg: string = "Movie Not Found!";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

search(){
  this.http
  .get("http://www.omdbapi.com/?apikey=110ee006&t="+this.userModel.title+"&y="+this.userModel.year+"&type="+this.userModel.type+"&i="+this.userModel.id)
   .subscribe((data) =>{
     this.linkArray.push("http://www.omdbapi.com/?apikey=110ee006&t="+this.userModel.title+"&y="+this.userModel.year+"&type="+this.userModel.type+"&i="+this.userModel.id)
     this.response = data;
     },(err) =>{
       console.log(err)
       this.errorMsg = "Movie Not Found";
     })
}

}
