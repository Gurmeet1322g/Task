import {NgModule, Component} from '@angular/core';
import { Routes,RouterModule} from '@angular/router'
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ListStudentsComponent } from './list-students/list-students.component';

const appPath:Routes=[
    {path:'',component:ListStudentsComponent},
    {path:'reactive', component:ReactiveFormComponent},
    {path:'template', component:TemplateFormComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appPath)],
    exports:[RouterModule]
})

export class AppRoutes{}