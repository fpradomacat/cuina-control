import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './angular-material.module';
import { AngularModule } from './angular.module';
import { AppRoutingModule } from './app-routing.module';

//Components
import { TestComponent } from './test/test.component';
import { AppComponent } from './app-root/app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    AngularModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
