import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import {FileNameDialogComponent} from './shared-module/file-name-dialog-component';
import { MessageDialogComponent } from './shared-module/messagedialog/message.dialog';

@NgModule({
  declarations: [
    AppComponent,
    MessageDialogComponent,
    FileNameDialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,    
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [

  ],
  entryComponents: [
    MessageDialogComponent,
    FileNameDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
