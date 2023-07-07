import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { StatisticsService } from 'src/app/statistics.service';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent implements OnInit, OnDestroy {

  constructor(private statisticsService: StatisticsService) { }
  battleData: Subject<string>;
  chartConfig = {
    xAxis: true,
    yAxis: true,
  }
  //simpleSubject = new ReplaySubject<string>(2);
  dataList:any[] = []

  ngOnInit(): void {
    
    this.statisticsService.connect();
    this.statisticsService.battleStatisticsMessage$
    .subscribe((data) => {
      console.log(data);
      let dataObj = JSON.parse(data);
      this.addOrUpdateData(dataObj.winner)
      this.dataList = [...this.dataList];
    })
    /*
    this.simpleSubject
    .subscribe((value) => {
      console.log("Subscriber 1:", value);
    })

    this.simpleSubject.next('1');
    this.simpleSubject.next('2');

    this.simpleSubject
    .subscribe((value) => {
      console.log("Subscriber 2:", value);
    })

    this.simpleSubject.next('3');
    this.simpleSubject.next('4');
    */
  }

  addOrUpdateData(id: number): void {
    var index = this.dataList.findIndex((item) =>{
      return item.name === id.toString();
    });
    if(index != -1){
      this.dataList[index].value = this.dataList[index].value +1;
      //this.dataList[index].value +=1
    }else{
      this.dataList.push({
        name: id.toFixed(),
        value: 1,
      });
    }
  }
  
  ngOnDestroy(): void{
    this.statisticsService.close();
  }
}
