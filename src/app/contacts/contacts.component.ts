import {Component, OnInit} from '@angular/core';
import {Contact} from "./contact.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() {
    this.detailContact = new Contact('','','')
  }

  ngOnInit(): void {
  }

  detailContact: Contact;

  selectedContact(contact: Contact) {
      this.detailContact = contact;
  }
}
