import {Component,Input, OnChanges, EventEmitter, Output} from '@angular/core';

@Component({
  selector : 'mi-star',
  templateUrl : 'app/shared/star.component.html'
})

export class StarComponent
{
  starWidth : number;
  @Input() rating : number;

  ngOnChanges() : void {
    this.starWidth = this.rating * 86/5;
  }
  @Output() ratingClick : EventEmitter<string> = new EventEmitter<string>();

  onClick() : void {
    this.ratingClick.emit(this.rating+' Clicked');
  }
}
