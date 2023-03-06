import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit {
  standings;
  id;
  constructor(private apiService:ApiServiceService ) {}

  ngOnInit(): void {
    this.apiService.getStanding()
    .subscribe(data=>{
      this.standings = data['standings'];
      this.id = sessionStorage.getItem('teamId')
    })
  }

}
