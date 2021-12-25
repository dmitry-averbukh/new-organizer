import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from "../contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts:Contact[] =[];


  constructor() {
    this.contacts =[
      new Contact("Dima","no one", "https://randomuser.me/api/portraits/lego/0.jpg"),
      new Contact("Roma","no one", "https://randomuser.me/api/portraits/lego/1.jpg"),
      new Contact("Shasha","no one", "https://randomuser.me/api/portraits/lego/2.jpg"),
      new Contact("Valery","no one", "https://randomuser.me/api/portraits/lego/3.jpg")
    ]
  }

  ngOnInit(): void {
  }
  @Output() outClickedContact =new EventEmitter<Contact>();
  clickedContact(contact: Contact) {
    this.outClickedContact.emit(contact);
  }
}
