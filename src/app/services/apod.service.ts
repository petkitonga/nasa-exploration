import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NasaSettings } from '../config/nasa.settings';
import { ApodPhoto } from '../apod/models/photo.model';

@Injectable()
export class ApodService {

    constructor(private httpClient: HttpClient, private settings: NasaSettings) { }

     
    getPhotoToday(retrievalDate:string){
        return this.httpClient.get<ApodPhoto>(
            this.settings.baseUrl,
            {
                params: {
                    date: retrievalDate,
                    api_key: this.settings.apiKey
                    
                }
            }
        );
    }

    getDatesList(){
        //Get today's date
        let apodDates = [];
        for (let i = 1; i < 31; i++) {
            const today = new Date();
            today.setDate(today.getDate()-i);
            apodDates.push(today);       
        }
        console.log(apodDates);
        return apodDates.map(
            (value:Date)=>{
                return {
                    routeDate: value.toISOString().split('T')[0],
                    displayDate: value.toDateString()
                }
            }
        );
    }

}