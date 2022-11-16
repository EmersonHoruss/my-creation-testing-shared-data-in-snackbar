import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { AppComponent } from './app.component';
import { MySnackbarComponent } from './my-snackbar/my-snackbar.component';

@NgModule({
  declarations: [AppComponent, MySnackbarComponent],
  imports: [
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
