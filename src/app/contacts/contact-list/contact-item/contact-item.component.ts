import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../contact.model";

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() contact: Contact;


  constructor() {
    this.contact = new Contact('', '', '')
  }

  ngOnInit(): void {
  }

  @Output() clickedContact = new EventEmitter<Contact>();

  selectedContactClicked(contact: Contact) {
    this.clickedContact.emit(contact);
  }
}
