import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { PopUpComponent } from './register/pop-up/pop-up.component';
import { UserComponent } from './register/user/user.component';
import { SearchUserComponent } from './register/search-user/search-user.component';
import { AddUserComponent } from './register/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PopUpComponent,
    UserComponent,
    SearchUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
