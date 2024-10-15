import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotificacaoService } from '../../../core/notificacao/notificacao.service';
import { NgIf, NgForOf, AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable, of } from 'rxjs';
import { ListagemCategoria } from '../../categorias/models/categoria.model';
import { CategoriaService } from '../../categorias/services/categoria.service';
import { ListagemNota } from '../models/nota.model';
import { NotaService } from '../services/nota.service';

@Component({
  selector: 'app-listagem-notas-arquivadas',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    AsyncPipe,
    MatChipsModule,
  ],
  templateUrl: './listagem-notas-arquivadas.component.html',
  styleUrl: './listagem-notas-arquivadas.component.scss'
})

export class ListagemNotasArquivadasComponent implements OnInit {

  notas$?: Observable<ListagemNota[]>

  categorias$?: Observable<ListagemCategoria[]>

  notasEmCache: ListagemNota[];

  constructor(private notaService: NotaService, private categoriaService: CategoriaService, private notificacao: NotificacaoService) {
    this.notasEmCache = [];
  }

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.selecionarTodos();

    this.notaService.selecionarTodos().subscribe((notas) => {
      this.notasEmCache = notas;

      this.notas$ = of(notas);
    });
  }

  filtrar(categoriaId?: number) {
    const notasFiltradas = this.obterNotasFiltradas(this.notasEmCache, categoriaId);

    this.notas$ = of(notasFiltradas);
  }

  private obterNotasFiltradas(notas: ListagemNota[], categoriaId?: number) {
    if (categoriaId) {
      return notas.filter((n) => n.categoriaId == categoriaId);
    }

    return notas;
  }

  desarquivar(nota: ListagemNota) {

    nota.arquivado = false;

    this.notaService.editar(nota.id, nota).subscribe((res) => {
      this.notificacao.sucesso(
        `O registro ID [${res.id}] foi desarquivado com sucesso!`
      );
    });
  }
}
