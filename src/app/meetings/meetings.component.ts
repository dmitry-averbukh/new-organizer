import { Component, OnInit } from '@angular/core';
import {Meeting} from "./meeting.model";

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  meetings: Meeting[];

  constructor() {
    this.meetings=[
      new Meeting("roma","30/11/22"),
      new Meeting("dima","22/11/22"),
      new Meeting("dima","11/12/22"),
    ];
  }

  ngOnInit(): void {
  }

}
