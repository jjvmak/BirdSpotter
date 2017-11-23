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
    this.http
      .get<SightingsData>('http://localhost:8020/sightings', {observe: 'response'})
      .subscribe(resp => {
        // Here, resp is of type HttpResponse<MyJsonData>.
        // You can inspect its headers:
        // console.log(resp.headers.get('species'));
        // And access the body directly, which is typed as MyJsonData as requested.
        // console.log(resp.body);
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


