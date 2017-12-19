import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormarrayExampleComponent } from './formarray-example/formarray-example.component';
import { FormbuilderExampleComponent } from './formbuilder-example/formbuilder-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    FormarrayExampleComponent,
    FormbuilderExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
