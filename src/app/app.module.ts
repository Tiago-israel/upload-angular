import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormComponent } from './cliente/form/form.component';
import { ClienteService } from './cliente/cliente.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TabelaComponent } from './cliente/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
