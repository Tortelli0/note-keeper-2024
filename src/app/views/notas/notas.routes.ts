import { Routes } from "@angular/router";
import { ListagemNotasComponent } from "./listar/listagem-notas.component";
import { CadastroNotaComponent } from "./cadastar/cadastro-nota.component";
import { EdicaoNotaComponent } from "./editar/edicao-nota.component";
import { ExclusaoNotaComponent } from "./excluir/exclusao-nota.component";
import { ListagemNotasArquivadasComponent } from "./arquivar/listagem-notas-arquivadas.component";

export const notasRoutes: Routes = [
  {
    path: '', redirectTo: 'listar', pathMatch: 'full',
  },
  { path: 'listar', component: ListagemNotasComponent, },
  { path: 'cadastrar', component: CadastroNotaComponent, },
  { path: 'editar/:id', component: EdicaoNotaComponent, },
  { path: 'excluir/:id', component: ExclusaoNotaComponent, },
  { path: 'arquivar', component: ListagemNotasArquivadasComponent },
]
