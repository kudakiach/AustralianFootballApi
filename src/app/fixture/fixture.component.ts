import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  games;
  date;
  id;
  ladders;
  constructor(private apiService: ApiServiceService) {

  }

  ngOnInit(): void {

    this.apiService.getAllGames()
    .subscribe(data=>{
      this.games = data['games'];
      this.id = sessionStorage.getItem('teamId');
    })
  }

}
