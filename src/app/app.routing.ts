import { UpcomingComponent } from './upcoming/upcoming.component';
import { PredictionComponent } from './prediction/prediction.component';
import { FixtureComponent } from './fixture/fixture.component';
import { TeamsComponent } from './teams/teams.component';
import { StandingComponent } from './standing/standing.component';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: TeamsComponent },
  {path:'fixture', component:FixtureComponent},
  {path:'prediction', component:PredictionComponent},
  {path:'standing', component:StandingComponent},
  {path:'upcoming', component:UpcomingComponent},

];

export const routing = RouterModule.forRoot(appRoutes)
