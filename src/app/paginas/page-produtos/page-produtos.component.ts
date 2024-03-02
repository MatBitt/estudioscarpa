import { Component } from '@angular/core';
import { ICategorias, IProduto } from '../../interfaces/Iproduto';
import { CommonModule } from '@angular/common';
import { mockProdutos } from '../../mock/mock';
import { CarrinhoService } from '../../servicos/carrinho.service';
import { TopicoComponent } from '../../componentes/topico/topico.component';

@Component({
  selector: 'app-page-produtos',
  standalone: true,
  imports: [CommonModule, TopicoComponent],
  templateUrl: './page-produtos.component.html',
  styleUrl: './page-produtos.component.css'
})
export class PageProdutosComponent {
  categorias: ICategorias[] = mockProdutos
  produtoSelecionado: IProduto = mockProdutos[0].produtos[0]

  constructor( private carrinho: CarrinhoService ){}

  redireciona(categoria: string) {
    var div = document.getElementById(categoria)
    if (div) {
      div.scrollIntoView({ behavior: 'smooth' })
    }
  }

  alterarModal(produto: IProduto) {
    this.produtoSelecionado = produto
  }

  adicionarAoCarrinho(produto: IProduto) {
    this.carrinho.addProduto(produto)
  }

  aumentarQuantidade(produto: IProduto) {
    this.carrinho.addProduto(produto)
    this.produtoSelecionado = this.carrinho.findProduto(produto)
  }

  diminuirQuantidade(produto: IProduto) {
    this.carrinho.diminuirQuantidade(produto)
    this.produtoSelecionado = this.carrinho.findProduto(produto)
  }
}
