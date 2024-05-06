import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//getting the data from environment.ts
const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})

export class WeatherAPIService {
  weatherDetails: any;
  weatherIcon: any;

  constructor(public httpClient:HttpClient) { }

  //function to call the api to get the weather data
  GetWeatherData():Observable<any>{
    return this.httpClient.get(`${API_URL}/weather?q=${"Roscommon"}&appid=${API_KEY}`);
  }
}