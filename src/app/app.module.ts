import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UsersService } from './services/users/users.service';
import { ValueService } from './services/value/value.service';
import { MasterService } from './services/master/master.service';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [AppComponent, UsersComponent, SidebarComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CdkAccordionModule,
    MatExpansionModule,
  ],
  providers: [UsersService, ValueService, MasterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
