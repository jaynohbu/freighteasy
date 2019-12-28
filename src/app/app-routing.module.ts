import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InternationalOpsComponent} from './international-ops/international-ops.component';
import {DomesticOpsComponent} from './domestic-ops/domestic-ops.component'
import {AccountingOpsComponent} from './accounting-ops/accounting-ops.component';


import {HBOLComponent} from './hbol/hbol.component';
import {MBOLComponent} from './mbol/mbol.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {LangUtil} from './utils/lang-util'
const routes: Routes = [
  {
    path: 'international',
    component: InternationalOpsComponent,
    data: { title: LangUtil.UIText('dashboard') }
  },
  {
    path: 'domestic',
    component: DomesticOpsComponent,
    data: { title: LangUtil.UIText('dashboard') }
  },
  {
    path: 'accounting',
    component: AccountingOpsComponent,
    data: { title: LangUtil.UIText('dashboard') }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: LangUtil.UIText('dashboard') }
  },
  {
    path: 'mawb',
    component: MBOLComponent,
    data: { title: LangUtil.UIText('mawb') }
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
