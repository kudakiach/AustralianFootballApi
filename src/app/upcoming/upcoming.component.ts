import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  games;
  id
  constructor(private apiService: ApiServiceService) {

  }

  ngOnInit(): void {
    this.apiService.upcomingGames()
    .subscribe(data=>{
      this.games = data['games'];
      this.id = sessionStorage.getItem('teamId')
    })
  }

}
