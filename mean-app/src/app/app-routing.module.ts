import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {PostComponent} from "./post/post.component";


const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'post', component: PostComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
