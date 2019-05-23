import { Component, OnInit } from '@angular/core';
import { ApodService } from '../services/apod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  constructor(private apodService: ApodService, private router: Router) { 
    this.router.navigate(['apod',(new Date().toISOString().split('T')[0]).toString()]);
  }

  apodDates=[];

  ngOnInit() {
    
    this.apodDates.push(...this.apodService.getDatesList());
    console.log(this.apodDates);
  }

}
