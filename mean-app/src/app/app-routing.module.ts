import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {PostComponent} from "./post/post.component";
import {LoginValidate} from "./login/login-validate";
import {importExpr} from "@angular/compiler/src/output/output_ast";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'post', component: PostComponent},
  {path: 'login', canDeactivate: [LoginValidate], component: LoginComponent},
  {path: 'lazy', loadChildren:()=> import('../lazy-loaded/lazy-loaded.module').then(lazyMod=>lazyMod.LazyLoadedModule)},
  {path: '**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
