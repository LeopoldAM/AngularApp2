import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/contact.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styles: [
  ]
})
export class ContactDetailComponent implements OnInit {

  constructor(public service: ContactService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      Address: '',
      City: '',
      Email: '',
      Firstname: '',
      Phone: '',
      PostalCode: '',
      Surname: '',
    }
  }

  onSubmit(form: NgForm) {

    if (this.service.formData.Id === 0) {
      this.insertRecord(form);
    }
    else
      this.updateRecord(form);
  }


  insertRecord(form: NgForm) {
    this.service.postContactDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putContactDetail().subscribe(
      res => {
        this.resetForm(form);
        //this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
