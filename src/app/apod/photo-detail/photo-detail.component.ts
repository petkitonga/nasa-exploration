import { Component, OnInit } from '@angular/core';
import { ApodPhoto } from '../models/photo.model';
import { ApodService } from 'src/app/services/apod.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component(
  {
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})

export class PhotoDetailComponent implements OnInit {
  
  photo: ApodPhoto;
  photoDate='';
  routeDate:string;
  loadingComplete:boolean=false;

  constructor(private apodService: ApodService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.loadingComplete=false;
        this.routeDate=params['routeDate'];
        this.apodService.getPhotoToday(this.routeDate).subscribe(
          (response: ApodPhoto) => {
            console.log(response);
            this.loadingComplete=true;
            this.photo = response;
            this.photoDate = new Date(this.photo.date).toDateString();

          }
        );
      }
    ); 
    
  }

}
