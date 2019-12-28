import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HBOLComponent } from './hbol/hbol.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MBOLComponent } from './mbol/mbol.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './navigations/main-nav/main-nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InternationalNavComponent } from './navigations/international-nav/international-nav.component';
import { DomesticNavComponent } from './navigations/domestic-nav/domestic-nav.component';
import { AccountingNavComponent } from './navigations/accounting-nav/accounting-nav.component';
import { InternationalOpsComponent } from './international-ops/international-ops.component';
import { DomesticOpsComponent } from './domestic-ops/domestic-ops.component';
import { AccountingOpsComponent } from './accounting-ops/accounting-ops.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HBOLComponent,
    PageNotFoundComponent,
    MBOLComponent,
    MainNavComponent,
    InternationalNavComponent,
    DomesticNavComponent,
    AccountingNavComponent,
    InternationalOpsComponent,
    DomesticOpsComponent,
    AccountingOpsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
