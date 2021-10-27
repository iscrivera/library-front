import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private libraryService: LibraryService,
    private _snackBar: MatSnackBar) { }

  hasError = false;
  errorMsg = '';
  hide = true;

  user = {
    ds_name: '',
    ds_last_name: '',
    ds_phone: '',
    ds_email: '',
    ds_password: ''
  }

  ngOnInit() {
  }

  createUser() {
    this.libraryService.postCreateUser(this.user).subscribe(response => {

      if (response.error == undefined) {
        this.hasError = false;
        this._snackBar.open('User created', 'OK');
      } else {
        console.log('Error: ' + response.error);
        this.hasError = true;
        this.errorMsg = response.error;
      }

    });
  }

}