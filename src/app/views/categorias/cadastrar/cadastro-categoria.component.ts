import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';
import { CadastroCategoria } from '../models/categoria.model';

@Component({
  selector: 'app-cadastrar-categoria',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './cadastrar-categoria.component.html',
})

export class CadastrarCategoriaComponent {
  categoriaForm: FormGroup;

  constructor( private router: Router, private categoriaService: CategoriaService) {

    this.categoriaForm = new FormGroup({
      titulo: new FormControl(''),
    });
  }

  cadastrar() {
    const novaCategoria: CadastroCategoria = this.categoriaForm.value;

    this.categoriaService.cadastrar(novaCategoria).subscribe((res) => {
      console.log(`O registro ID [${res.id}] foi cadastrado com sucesso!`);

      this.router.navigate(['/categorias']);
    });
  }
}
