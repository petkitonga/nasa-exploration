import { Component, OnInit } from '@angular/core';
import { ApodService } from '../services/apod.service';
import { ApodPhoto } from './models/photo.model';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  constructor(private apodService: ApodService) { }

  apodDates=[];

  ngOnInit() {
    
    this.apodDates.push(...this.apodService.getDatesList());
    console.log(this.apodDates);
  }

}
