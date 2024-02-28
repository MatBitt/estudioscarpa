import { Component } from '@angular/core';
import { ICategorias, IProduto } from '../../interfaces/Iproduto';
import { CommonModule } from '@angular/common';
import { mockProdutos } from '../../mock/mock';

@Component({
  selector: 'app-page-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-produtos.component.html',
  styleUrl: './page-produtos.component.css'
})
export class PageProdutosComponent {
  categorias: ICategorias[] = mockProdutos;
  tituloModal: string = ''
  descModal: string = ''
  precoModal: number = 0
  imgModal: string = ''

  redireciona(categoria: string) {
    var div = document.getElementById(categoria);
    if (div) {
        div.scrollIntoView({ behavior: 'smooth' });
    }
  }

  alterarModal(produto: IProduto) {
    this.tituloModal = produto.title
    this.descModal = produto.desc
    this.precoModal = produto.preco
    this.imgModal = produto.src
  }
}
