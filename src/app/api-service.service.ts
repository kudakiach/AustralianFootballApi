import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  id=sessionStorage.getItem('teamId')

  constructor(private http:HttpClient) { }

  getAllTeams(){
    return this.http.get('https://api.squiggle.com.au/?q=teams')
  }

  getAllGames(){
    return this.http.get('https://api.squiggle.com.au/?q=games&&year=2021;complete=100')
  }
  upcomingGames(){
    return this.http.get('https://api.squiggle.com.au/?q=games&&year=2021;complete=!100')
  }
  getGameRound(){
    return this.http.get('https://api.squiggle.com.au/?q=ladder')
  }

  getPredictions(){

    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2021;complete=!100;')
  }

  getStanding(){

    return this.http.get('https://api.squiggle.com.au/?q=standings')
  }
}
