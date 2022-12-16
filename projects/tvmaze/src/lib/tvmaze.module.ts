import { NgModule } from '@angular/core';
import { TvmazeComponent } from './tvmaze.component';
import { SampleComponent } from './sample/sample.component';



@NgModule({
  declarations: [
    TvmazeComponent,
    SampleComponent,
  ],
  imports: [
  ],
  exports: [
    TvmazeComponent,
    SampleComponent
  ]
})
export class TvmazeModule { }
