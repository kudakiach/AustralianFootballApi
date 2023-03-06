import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})


export class PredictionComponent implements OnInit {
  tips;
  id;



  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getPredictions()
    .subscribe(data=>{
      this.tips = data['tips'];
      this.id = sessionStorage.getItem('teamId')
    })
  }

}
