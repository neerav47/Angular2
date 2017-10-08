import {Component} from '@angular/core';
import {IArticle} from './Article';
import {NewsDataService}  from './NewsDataService';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
    templateUrl : 'app/NewsApp/News.html',
    providers : [NewsDataService]
})

export class NewsComponent {
  source : string;
  Articles : IArticle[];
constructor(private _newsDataService : NewsDataService){
  this._newsDataService.getbbc().subscribe(data => {
      this.Articles = data;
      this.source = "BBC";
      });
}

onBBC() : void {
  this._newsDataService.getbbc().subscribe(data =>this.Articles = data);
  this.source = "BBC";
}

  onCnn() : void{
    this._newsDataService.getCnbc().subscribe(data => {
      this.Articles = data;
      this.source = "CNN";
        });
  }
}
