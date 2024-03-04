import { Component } from '@angular/core';
import { IProduto } from '../../interfaces/Iproduto';
import { CarrinhoService } from '../../servicos/carrinho.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TopicoComponent } from '../../componentes/topico/topico.component';

@Component({
  selector: 'app-page-carrinho',
  standalone: true,
  imports: [CommonModule, RouterLink, TopicoComponent],
  templateUrl: './page-carrinho.component.html',
  styleUrl: './page-carrinho.component.css'
})
export class PageCarrinhoComponent {
  carrinho: IProduto[] = []
  
  constructor( private carrinhoService: CarrinhoService ){
    this.carrinho = carrinhoService.getProdutos()
  }
  
  aumentarQuantidade(produto: IProduto) {
    this.carrinhoService.addProduto(produto)
  }

  diminuirQuantidade(produto: IProduto) {
    this.carrinhoService.diminuirQuantidade(produto)
  }

  quantidadeProdutos() {
    return this.carrinhoService.getQuantidadeProdutos()
  }
}
