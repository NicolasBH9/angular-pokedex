import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/statistics.service';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent implements OnInit, OnDestroy {

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.connect();
    this.statisticsService.battleStatisticsMessage
    .subscribe((data) => {
      console.log(data);
    })
  }

  ngOnDestroy(): void{
    this.statisticsService.close();
  }
}
