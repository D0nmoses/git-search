import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchformComponent } from './components/search-form/search-form.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './services/github-service.service';



@NgModule({
  declarations: [
    AppComponent,
    SearchformComponent,
    UserComponent,
    AboutComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
