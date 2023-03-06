import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams;
  ladders;
  round;
ladder;
  constructor(private apiService:ApiServiceService, private router:Router){

    this.teams = [];



  }

  ngOnInit(): void{

    this.apiService.getAllTeams()
    .subscribe(data=>{

        this.teams = data['teams'];

    })

    this.getGameRound();

  }

  favourite(id){
    sessionStorage.setItem('teamId', id);
    this.goToTeams();
  }

  goToTeams() {
    this.router.navigate(['/fixture']);
  }

  getGameRound(){
    this.apiService.getGameRound().subscribe(res=>{

      this.ladders = res['ladder'];
      console.log(this.ladders)


   })
  }


}
