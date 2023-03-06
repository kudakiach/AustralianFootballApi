import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing'


import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { FixtureComponent } from './fixture/fixture.component';
import { PredictionComponent } from './prediction/prediction.component';
import { StandingComponent } from './standing/standing.component';
import { MinPipe } from './min.pipe';
import { UpcomingComponent } from './upcoming/upcoming.component';





@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    FixtureComponent,
    PredictionComponent,
    StandingComponent,
    MinPipe,
    UpcomingComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
