import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

interface WeatherData {
  main: any;
  name: string;
  weather: any[];
}

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any> {
    const url = `${API_URL}/weather?q=Roscommon&appid=${API_KEY}`; 
    return this.http.get(url);
  }
}

@Component({
  selector: 'app-weather',// Component selector
  templateUrl: './weather.page.html',// Stylesheet URLs
  styleUrls: ['./weather.page.scss'],// Stylesheet URLs
})
export class WeatherPage implements OnInit {
  cityName: string = ''; // Initialize with an empty string
  weatherTemp: any = {}; // Initialize with an empty object
  weatherDetails: any = {}; // Initialize with an empty object
  weatherIcon: string = ''; // Initialize with an empty string
  todayDate: Date = new Date();

  constructor(private weatherService: WeatherAPIService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.weatherService.getWeatherData().subscribe((data: WeatherData) => {
      console.log(data);
      this.weatherTemp = data.main;
      this.cityName = data.name;
      this.weatherDetails = data.weather[0];
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`;
    });
  }
}
