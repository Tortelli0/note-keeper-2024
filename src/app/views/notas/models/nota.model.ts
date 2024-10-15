import { ListagemCategoria } from "../../categorias/models/categoria.model";

export interface CadastroNota {
titulo: string;
conteudo: string;
categoriaId: number;
arquivado: boolean;
}

export interface NotaCriada {
id: number;
titulo: string;
conteudo: string;
categoriaId: number;
}

export interface EdicaoNota {
  titulo: string;
  conteudo: string;
  categoriaId: number;
  arquivado: boolean;
}

export interface NotaEditada {
  id: number;
  titulo: string;
  conteudo: string;
  categoriaId: number;
}

export interface ListagemNota {
  id: number;
  titulo: string;
  conteudo: string;
  categoriaId: number;
  categoria: ListagemCategoria;
  arquivado: boolean;
}

export interface DetalhesNota {
  id: number;
  titulo: string;
  conteudo: string;
  categoriaId: number;
  categoria: ListagemCategoria;
}

export interface NotaExcluida {

}
