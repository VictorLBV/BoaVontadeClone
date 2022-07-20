import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { DiaADiaComponent } from './dia-a-dia/dia-a-dia.component';
import { EcologiaComponent } from './ecologia/ecologia.component';
import { EducacaoComponent } from './educacao/educacao.component';
import { EsporteComponent } from './esporte/esporte.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SaudeComponent } from './saude/saude.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    DiaADiaComponent,
    EcologiaComponent,
    EducacaoComponent,
    EsporteComponent,
    NoticiasComponent,
    SaudeComponent,
    TecnologiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NoopAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
