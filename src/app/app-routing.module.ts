import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { ContatoComponent } from './page/contato/contato.component';
import { SobreNosComponent } from './page/sobre-nos/sobre-nos.component';
import { ExtraComponent } from './page/extra/extra.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'extra', component: ExtraComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
