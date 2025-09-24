import type { CategoriaDTO } from './categoria';
import type { LojaDTO } from './loja';


export type ProdutoDTO = {
    id: number;
    nome: string;
    descricao: string;
    valor: number;

    //objeto do tipo loja
    categoria: CategoriaDTO;

    //list de objetos do tipo loja
    lojas: LojaDTO
}