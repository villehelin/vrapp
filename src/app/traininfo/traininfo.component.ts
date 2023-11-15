import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-traininfo',
  templateUrl: './traininfo.component.html',
  styleUrls: ['./traininfo.component.css']
})
export class TraininfoComponent implements OnInit {
  curDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  traininfo: any[];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    let url = 'https://rata.digitraffic.fi/api/v1/trains/'
    +this.curDate;
    console.log(url);

    this.http.get(url).subscribe((traininfoData: any) => {
      console.log(traininfoData);
      this.traininfo = traininfoData;
    });
  }

}
