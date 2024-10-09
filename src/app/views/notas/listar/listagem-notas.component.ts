import { NgForOf, AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ListagemNota } from '../models/nota.model';
import { NotaService } from '../services/nota.service';

@Component({
  selector: 'app-listagem-notas',
  standalone: true,
  imports: [NgIf, NgForOf, RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, AsyncPipe],
  templateUrl: './listagem-notas.component.html',
  styleUrl: './listagem-notas.component.scss'
})

export class ListagemNotasComponent implements OnInit{
  notas$?: Observable<ListagemNota[]>

  constructor(private notaService: NotaService) {

  }

  ngOnInit(): void {
    this.notas$ = this.notaService.selecionarTodos();
  }
}
