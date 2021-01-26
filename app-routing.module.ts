import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Form2Component } from './form2/form2.component';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
 {path : 'all' , component : UserDetailComponent},
 {path :'signup', component : Form2Component},
 {path :'login', component : Form1Component}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
