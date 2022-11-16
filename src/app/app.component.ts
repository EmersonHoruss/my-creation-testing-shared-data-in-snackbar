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
    const shortMessage = 'Alarm have been added correctly';
    const longMessage =
      shortMessage + ' ,thismessage says the operation was succesfully done';
    this._snackBar.openFromComponent(MySnackbarComponent, {
      duration: 100000,
      data: {
        message: shortMessage,
      },
      panelClass: ['my-snackbar-panel'],
    });
  }
}
