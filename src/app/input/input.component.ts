import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AbstractControl, ValidatorFn, NgForm, FormGroup, Validators, FormControl, NgModel} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @ViewChild('sighting') sightingForm: NgForm;
  id: number;
  dateTime: string;
  description: string;
  species: string;
  count: number;
  
  form;
  ln: number;
  allowedSpecies: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<SpeciesData>('http://localhost:8020/species', {observe: 'response'})
      .subscribe(resp => {
         this.ln = Object.keys(resp.body).length;
        
          for (let i = 0; i < this.ln; i++) {
            this.allowedSpecies.push(resp.body[i].name);
            console.log(resp.body[i].name);
          }
        
      });
   
  }
  
  onSubmit() {
    this.id = this.sightingForm.value.id;
    this.dateTime = this.sightingForm.value.dateTime;
    this.description = this.sightingForm.value.description;
    this.species = this.sightingForm.value.species;
    this.count =  this.sightingForm.value.count;
    
     const body = {
      id: this.id,
      dateTime: this.dateTime,
      description: this.description,
      species: this.species,
      count: 1
    };
    this.http.post('http://localhost:8020/sightings', body).subscribe(); 
    
    this.sightingForm.reset();
  }
  
}

interface SpeciesData {
  name;
}

