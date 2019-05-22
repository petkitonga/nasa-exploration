import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NasaSettings } from '../config/nasa.settings';
import { ApodPhoto } from '../apod/models/photo.model';

@Injectable()
export class ApodService {
    constructor(private httpClient: HttpClient, private settings: NasaSettings) { }
    
    getPhotoToday(){
        return this.httpClient.get<ApodPhoto>(
            this.settings.baseUrl,
            {
                params: {
                    api_key: this.settings.apiKey
                }
            }
        );
    }

}