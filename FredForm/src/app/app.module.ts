import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatIconModule, MatCardModule, MatGridListModule, MatTableModule, MatInputModule} from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MyNavComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    LayoutModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    NgbModalModule,
    MatTableModule,
    MomentModule,
    MatInputModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
