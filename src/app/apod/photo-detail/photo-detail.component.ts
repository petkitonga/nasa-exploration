import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApodPhoto } from '../models/photo.model';

@Component(
  {
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})

export class PhotoDetailComponent implements OnInit, OnChanges {
  
  @Input() photo: ApodPhoto;
  photoDate='';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.photo!==undefined) {
      this.photoDate = new Date(this.photo.date).toDateString();
    }
    
  }

}
