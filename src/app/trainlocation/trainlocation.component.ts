import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-trainlocation',
  templateUrl: './trainlocation.component.html',
  styleUrls: ['./trainlocation.component.css']
})
export class TrainlocationComponent implements OnInit {
  trainlocation: any[];
  lat: number;
  lng: number;
  zoom: number;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.lat = 65.524110;
    this.lng = 25.748151;
    this.zoom = 4;
    let url = 'https://rata.digitraffic.fi/api/v1/train-locations/latest/';

    this.http.get(url).subscribe((trainlocationData: any) => {
      console.log(trainlocationData);
      this.trainlocation = trainlocationData;
    });
  }

}
