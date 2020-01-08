import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostCreateComponent} from './post/post-create/post-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {HeaderComponent} from './header/header.component';
import {PostListComponent} from './post/post-list/post-list.component';
import {LoginComponent} from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    LoginComponent,
    PagenotfoundComponent,
    LoginFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
