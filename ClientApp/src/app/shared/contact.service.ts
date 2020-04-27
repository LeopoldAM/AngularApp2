import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  formData = new Contact();
  readonly rootUrl = 'http://localhost:64216/api';
  list: Contact[];

  constructor(private http: HttpClient) { }

  postContactDetail() {
    return this.http.post(this.rootUrl + '/Contacts', this.formData);
  }
  putContactDetail() {
    return this.http.put(this.rootUrl + '/Contacts/' + this.formData.Id, this.formData);
  }
  deleteContactDetail(id) {
    return this.http.delete(this.rootUrl + '/Contacts/' + id);
  }

  searchContact(searchString) {
    return this.http.get(this.rootUrl + '/ContactSearch/' + searchString);
  }

  refreshList() {
    this.http.get(this.rootUrl + '/Contacts')
      .toPromise()
      .then(res => this.list = res as Contact[]);
  }
}
