import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

   name = 'mario' 
  
  navigateButton() {
    console.log("navigated bro")
  }

  ngOnInit(): void {
  }

}
