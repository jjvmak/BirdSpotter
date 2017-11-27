import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AbstractControl, ValidatorFn, NgForm } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  id: number;
  dateTime: string;
  description: string;
  species: string;
  count: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
//    const body = {id: 55,
//                  dateTime: '2018-12-12T10:10:00Z',
//                  description: 'testi',
//                  species: 'gadwall',
//                  count: 1  };
//    this.http.post('http://localhost:8020/sightings', body).subscribe(); 
  }
  
  onSubmit(form: NgForm) {
    this.id = form.value.id;
    this.dateTime = form.value.dateTime;
    this.description = form.value.description;
    this.species = form.value.species;
    this.count =  form.value.count;
    
    console.log('das: ' + this.id + this.dateTime + this.description + this.species + this.count);
  }

}

