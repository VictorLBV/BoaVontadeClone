import { ContatoComponent } from './../contato/contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaADiaComponent } from '../dia-a-dia/dia-a-dia.component';
import { EcologiaComponent } from '../ecologia/ecologia.component';
import { EducacaoComponent } from '../educacao/educacao.component';
import { EsporteComponent } from '../esporte/esporte.component';
import { NoticiasComponent } from '../noticias/noticias.component';
import { SaudeComponent } from '../saude/saude.component';
import { TecnologiaComponent } from '../tecnologia/tecnologia.component';

const routes: Routes = [
  {
  path: 'contato', component: ContatoComponent
  },
  {
    path: 'dia-a-dia', component: DiaADiaComponent
  },
  {
    path: 'ecologia', component: EcologiaComponent
  },
  {
    path: 'educacao', component: EducacaoComponent
  },
  {
    path: 'esporte', component: EsporteComponent
  },
  {
    path: 'noticias', component: NoticiasComponent
  },
  {
    path: 'saude', component: SaudeComponent
  },
  {
    path: 'tecnologia', component: TecnologiaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
