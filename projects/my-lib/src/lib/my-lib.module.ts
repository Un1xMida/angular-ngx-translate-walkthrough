import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    TranslateModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
