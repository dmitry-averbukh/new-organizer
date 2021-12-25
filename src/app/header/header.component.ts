import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() headerItemSelected = new EventEmitter<string>();

  onHeaderItemSelected(item: string) {
      this.headerItemSelected.emit(item)
  }
}
