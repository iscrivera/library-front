import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public idBook: number,
    private libraryService: LibraryService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }
  book = {
    ds_title: "",
    ds_author: "",
    tx_synopsis: "",
    ds_img: "",
    id_book: 0
  };

  hasError = false;
  errorMsg = "";

  ngOnInit(): void {
    this.libraryService.getBook(this.idBook).subscribe(response => {
      this.book = response;
    });
  }

  getLoan() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    let loan = {
      id_book: this.book.id_book,
      id_user: user.id_user
    }

    this.libraryService.postLoan(loan).subscribe(response => {
      if (response.error == undefined) {
        this.hasError = false;
        this._snackBar.open('Book loan requested', 'OK');
        this.dialog.closeAll();
      } else {
        console.log('Error: ' + response.error);
        this.hasError = true;
        this.errorMsg = response.error;
      }
    });
  }

}

