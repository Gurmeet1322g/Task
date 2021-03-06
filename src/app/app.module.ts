import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutes } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StudentService } from './student.service';
import { ListStudentsComponent } from './list-students/list-students.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    HeaderComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
