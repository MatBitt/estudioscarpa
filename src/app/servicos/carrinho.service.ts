import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/Iproduto';
import { Subject } from 'rxjs';
import { mockProdutos } from '../mock/mock';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private numeroItensCarrinhoSubject = new Subject<number>();
  numeroItensCarrinho$ = this.numeroItensCarrinhoSubject.asObservable();
  quantidadeProdutos:number = 0

  private produtos: IProduto[] = mockProdutos.flatMap(categoria => categoria.produtos)

  constructor() { }

  addProduto(produto: IProduto) {
    const index = this.produtos.findIndex(item => item.id === produto.id)
    if (index !== -1) {
      this.produtos[index].quantidade++ 
      this.quantidadeProdutos++
      this.numeroItensCarrinhoSubject.next(this.quantidadeProdutos)
    }
  }

  diminuirQuantidade(produto: IProduto) {
    const index = this.produtos.findIndex(item => item.id === produto.id)
    if (index !== -1) {
      this.quantidadeProdutos--
      this.produtos[index].quantidade--
      this.numeroItensCarrinhoSubject.next(this.quantidadeProdutos)
    }
  }

  findProduto(produto: IProduto) {
    const index = this.produtos.findIndex(item => item.id === produto.id)
    return this.produtos[index]
  }

  getProdutos() {
    return this.produtos;
  }

  limparCarrinho() {
    for(const produto of this.produtos)
    produto.quantidade = 0;
    this.quantidadeProdutos = 0
    this.numeroItensCarrinhoSubject.next(this.quantidadeProdutos)
  }

  getQuantidadeProdutos(){
    return this.quantidadeProdutos
  }
}
