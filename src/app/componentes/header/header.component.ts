import { Component } from '@angular/core';
import {  Route, Router, RouterLink } from '@angular/router';
import { CarrinhoService } from '../../servicos/carrinho.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  Produtos : String[] = ['Planner', 'Sketchbook', 'Adesivos', 'Cartela', 'Bloquinho']
  quantidadeProdutos:number = 0
  private subscription: Subscription

  constructor(private router: Router, private carrinhoService: CarrinhoService) {
    this.subscription = this.carrinhoService.numeroItensCarrinho$.subscribe(
      numero => {
        this.quantidadeProdutos = numero
      }
    )
  }

  estouNoCarrinho(): boolean {
    return this.router.url === '/carrinho'
  }

  atualizaQuantidadeProdutos() {
    this.quantidadeProdutos = this.carrinhoService.getProdutos.length
  }
}
