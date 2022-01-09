import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DndDirective } from './direcitves/dnd.directive';
import { ProgressComponent } from './components/progress/progress.component';
import { NgSpinnerModule } from 'ng-bootstrap-spinner';


@NgModule({
  declarations: [
    AppComponent,
    DndDirective,
    ProgressComponent
    
    
  ],
  imports: [
    NgSpinnerModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
