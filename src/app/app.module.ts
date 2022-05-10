import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CounterComponent } from './components/counter/counter.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { SharedModule } from './shared/shared.module';

import { UsersService } from './services/users/users.service';
import { ValueService } from './services/value/value.service';
import { MasterService } from './services/master/master.service';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TempConverterComponent } from './temp-converter/temp-converter.component';
import { TempConverterPipe } from './shared/temp-converter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SidebarComponent,
    WelcomeComponent,
    CounterComponent,
    SignInComponent,
    DialogComponent,
    NotFoundComponent,
    TempConverterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UsersService, ValueService, MasterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
