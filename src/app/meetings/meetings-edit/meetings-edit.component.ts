import { EventEmitter } from '@angular/core';
import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import {Meeting} from "../meeting.model";

@Component({
  selector: 'app-meetings-edit',
  templateUrl: './meetings-edit.component.html',
  styleUrls: ['./meetings-edit.component.css']
})
export class MeetingsEditComponent implements OnInit {

  @ViewChild("dateInput") dateInputRef: ElementRef | undefined;
  @ViewChild("nameInput") nameInputRef: ElementRef | undefined;
  @Output("createMeeting") meetingEmitter = new EventEmitter<Meeting>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick() {
    // @ts-ignore
    this.dateInputRef.nativeElement.value = '';
    // @ts-ignore
    this.nameInputRef.nativeElement.value = '';
  }

  onNewCMeetingSub() {
    const date = this.dateInputRef?.nativeElement.value;
    const name = this.nameInputRef?.nativeElement.value;
    this.meetingEmitter.emit(new Meeting(name,date));
  }
}
