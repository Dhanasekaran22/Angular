import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { VotingAppComponent } from './voting-app/voting-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CounterAppComponent,
    TemperatureConverterComponent,
    VotingAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
