import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';
import { DetailBookComponent } from 'src/app/components/books/detail-book/detail-book.component';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private route: Router,
    public dialog: MatDialog,
    private libraryService: LibraryService) { }

  books = [];

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user == undefined) {
      this.route.navigate(['../login']);
    } else {
      this.libraryService.getBooks().subscribe(response => {
        if (response != undefined) {
          this.books = response;
        }
      });
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['../login']);
  }

  detail(idBook) {
    this.dialog.open(DetailBookComponent, {
      data: {
        idBook: idBook
      }
    });
  }

  profile() {
    this.dialog.open(DetailProfileComponent);
  }

}
