import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sightings',
  templateUrl: './sightings.component.html',
  styleUrls: ['./sightings.component.css']
})
export class SightingsComponent implements OnInit {
  ln;
  results: Sighting[] = [];
  tmp: Sighting;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<SightingsData>('http://localhost:8020/sightings', {observe: 'response'})
      .subscribe(resp => {
        this.ln = Object.keys(resp.body).length;

        for (let i = 0; i < this.ln; i++) {

          // console.log(resp.body[i].species);
          this.tmp = new Sighting(resp.body[i].id,
                                  resp.body[i].dateTime,
                                  resp.body[i].description,
                                  resp.body[i].species,
                                  resp.body[i].count);
          this.results.push(this.tmp);

         // console.log(this.results.length)
        }

        console.log(this.results[3].getDescription);

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

  constructor(private id: number,
    private dateTime: string,
    private description: string,
    private species: string,
    private count: number) {}

  get getId(): number {
    return this.id;
  }

  get getDateTime(): string {
    return this.dateTime;
  }

  get getDescription(): string {
    return this.description;
  }

  get getSpecies(): string {
    return this.species;
  }

  get getCount(): number {
    return this.count;
  }
}
