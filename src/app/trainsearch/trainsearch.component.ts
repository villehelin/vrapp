import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trainsearch',
  templateUrl: './trainsearch.component.html',
  styleUrls: ['./trainsearch.component.css']
})
export class TrainsearchComponent implements OnInit {
  zoom: number;

  trainsearch: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.zoom = 7;
  }

  onSubmit(form) {
    let url = 'https://rata.digitraffic.fi/api/v1/train-locations/latest/'
      + form.num;
    console.log(url);

    this.http.get(url).subscribe((trainsearchData: any) => {
      console.log(trainsearchData);
      this.trainsearch = trainsearchData;
    });
  }

}
