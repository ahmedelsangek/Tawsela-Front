import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  date:any="2021/07/30"
  constructor() { }
  @Output() sendDate = new EventEmitter();
  ngOnInit(): void {
  }

  

}
