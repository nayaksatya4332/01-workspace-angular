import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practice00Component } from './components/practice00/practice00.component';
import { Practice01Component } from './components/practice01/practice01.component';
import { Practice00Service } from './services/practice00.service';
import { FormsModule } from '@angular/forms';
import { CustomCasePipe } from './pipes/custom-case.pipe';
import { CaseDirectiveDirective } from './directive/case-directive.directive';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Practice00Component,
    Practice01Component,
    CustomCasePipe,
    CaseDirectiveDirective,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Practice00Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
