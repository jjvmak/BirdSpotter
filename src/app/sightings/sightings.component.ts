import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sightings',
  templateUrl: './sightings.component.html',
  styleUrls: ['./sightings.component.css']
})
export class SightingsComponent implements OnInit {
  ln;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<SightingsData>('http://localhost:8020/sightings', {observe: 'response'})
      .subscribe(resp => {
        this.ln = Object.keys(resp.body).length;

        for (let i = 0; i < this.ln; i++) {

          console.log(resp.body[i]);
        }

      });
  }
}

interface SightingsData {
  id;
  dateTime;
  description;
  species;
  count;
}

export class Sighting {
  id: number;
  dateTime: string;
  description: string;
  species: string;
  count: number;
}
