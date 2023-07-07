import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
    {path: 'statistics-list', component: StatisticsListComponent}
    ]),
  ]
})
export class StatisticsModule { }
