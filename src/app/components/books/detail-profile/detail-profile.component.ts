import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.css']
})
export class DetailProfileComponent implements OnInit {

  constructor() { }

  user = {
    ds_email: '',
    ds_password: '',
    ds_name:'',
    ds_last_name:'',
    ds_phone:''
  };

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
