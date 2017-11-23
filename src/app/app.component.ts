import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bird Spotter';
  results: string[];
  ln;



  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }
}

interface SightingsData {
  id;
  dateTime;
  description;
  species;
  count;
}


