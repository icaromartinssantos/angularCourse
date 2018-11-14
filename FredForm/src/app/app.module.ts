import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatIconModule, MatCardModule, MatGridListModule, MatTableModule, MatInputModule} from '@angular/material';
import { ApontamentoComponent } from './apontamento/apontamento.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'apontamento', component: ApontamentoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ApontamentoComponent,
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
    MatInputModule,
    MatPaginatorModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


