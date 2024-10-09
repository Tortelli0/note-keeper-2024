import { Routes } from "@angular/router";
import { ListagemNotasComponent } from "./listar/listagem-notas.component";
import { CadastroNotasComponent } from "./cadastar/cadastro-notas.component";

export const notasRoutes: Routes = [
  {
    path: '', redirectTo: 'listar', pathMatch: 'full',
  },
  {path: 'listar', component: ListagemNotasComponent,},
  {path: 'cadastrar', component: CadastroNotasComponent,},
]
