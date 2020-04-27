import { ContactService } from './../../shared/contact.service';
import { Component, OnInit } from '@angular/core';
import { format } from 'url';
import { Contact } from '../../shared/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: [
  ]
})
export class ContactListComponent implements OnInit {

  searchValue: string = '';

  constructor(public service: ContactService) { }

  ngOnInit() {
    this.service.refreshList();


  }

  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteContactDetail(Id)
        .subscribe(res => {
          this.service.refreshList();
        },
          err => { console.log(err); })
    }
  }

  onSearch(searchValue) {
    this.service.searchContact(searchValue)
      .subscribe(res => {
        this.service.list = res as Contact[];
      },
        err => { console.log(err); })
  }

  resetFilter() {
    this.searchValue = '';
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }


}
