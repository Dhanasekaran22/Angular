import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CardDirective } from './card.directive';
import { PipesComponent } from './pipes/pipes.component';
import { FormSharingComponent } from './form-sharing/form-sharing.component';
import { ListSharingComponent } from './list-sharing/list-sharing.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { NgDoCheckComponent } from './ng-do-check/ng-do-check.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    CustomDirectiveDirective,
    CardDirective,
    PipesComponent,
    FormSharingComponent,
    ListSharingComponent,
    LifeCycleHooksComponent,
    NgDoCheckComponent,
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
