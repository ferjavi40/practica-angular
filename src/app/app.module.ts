import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';//Este es lo que necesitamos para el formulario

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PadreComponent } from './swichtInput/padre/padre.component';
import { HijoComponent } from './swichtInput/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule//Aqui tambien lo importamos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
