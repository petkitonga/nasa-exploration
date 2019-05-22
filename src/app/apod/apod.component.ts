import { Component, OnInit } from '@angular/core';
import { ApodService } from '../services/apod.service';
import { ApodPhoto } from './models/photo.model';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css'],
  providers: [ApodService]
})
export class ApodComponent implements OnInit {

  constructor(private apodService: ApodService) { }

  apodPhoto: ApodPhoto;

  ngOnInit() {
    this.apodService.getPhotoToday().subscribe(
      (response: ApodPhoto)=>{
        console.log(response);
        this.apodPhoto=response;
      }
    );
  }

}
