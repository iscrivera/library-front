import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private route: Router, private libraryService: LibraryService) { }

  hasError = false;
  errorMsg = '';
  hide = true;
  user = {
    ds_email: '',
    ds_password: ''
  };
  ngOnInit(): void {
  }

  validateLogin() {
    this.libraryService.postLogin(this.user).subscribe(response => {

      if (response.error == undefined) {
        this.hasError = false;
        localStorage.setItem('user', JSON.stringify(response));
        this.route.navigate(['books'])
      } else {
        console.log('Error: ' + response.error);
        this.hasError = true;
        this.errorMsg = response.error;
      }

    });
  }

}
