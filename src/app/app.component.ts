import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MySnackbarComponent } from './my-snackbar/my-snackbar.component';
/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  durationInSeconds = 1;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackbar() {
    this._snackBar.openFromComponent(MySnackbarComponent, {
      duration: 1000,
      data: { title: 'hola' },
    });
  }
}
