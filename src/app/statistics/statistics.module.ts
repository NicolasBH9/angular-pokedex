import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [StatisticsListComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    RouterModule.forChild([
    {path: 'statistics-list', component: StatisticsListComponent}
    ]),
  ]
})
export class StatisticsModule { }
