import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/Iproduto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private numeroItensCarrinhoSubject = new Subject<number>();
  numeroItensCarrinho$ = this.numeroItensCarrinhoSubject.asObservable();
  quantidadeProdutos:number = 5

  private produtos: IProduto[] = [
    {
      id:2,
      src: 'assets/estudioscarpa_FOTO2.jpg',
      title: 'titulo2',
      desc: 'desc2',
      preco: 10.50,
      quantidade: 1
    },
    {
      id:1,
      src: 'assets/estudioscarpa_FOTO1.jpg',
      title: 'titulo1',
      desc: 'desc1',
      preco: 10.50,
      quantidade: 1
    },
    {
      id:5,
      src: 'assets/estudioscarpa_FOTO5.jpg',
      title: 'titulo5',
      desc: 'desc5',
      preco: 10.50,
      quantidade: 1
    },
    {
      id:3,
      src: 'assets/estudioscarpa_FOTO3.jpg',
      title: 'titulo3',
      desc: 'desc3',
      preco: 10.50,
      quantidade: 1
    },
    {
      id:4,
      src: 'assets/estudioscarpa_FOTO4.jpg',
      title: 'titulo4',
      desc: 'desc4',
      preco: 10.50,
      quantidade: 1
    },
  ];

  constructor() { }

  addProduto(produto: IProduto) {
    const index = this.produtos.findIndex(item => item.id === produto.id);
    if (index !== -1) {
      this.produtos[index].quantidade++
    } else {
      this.produtos.push(produto);
    }
    this.quantidadeProdutos++
    this.numeroItensCarrinhoSubject.next(this.quantidadeProdutos)
  }

  diminuirQuantidade(produto: IProduto) {
    const index = this.produtos.findIndex(item => item.id === produto.id);
    if (index !== -1) {
      if (this.produtos[index].quantidade > 1) {
        this.produtos[index].quantidade--
      } else {
        this.produtos.splice(index, 1);
      }
      this.quantidadeProdutos--
      this.numeroItensCarrinhoSubject.next(this.quantidadeProdutos)
    }
  }

  findProduto(produto: IProduto) {
    const index = this.produtos.findIndex(item => item.id === produto.id);
    return this.produtos[index]
  }

  getProdutos() {
    return this.produtos;
  }

  limparCarrinho() {
    this.produtos = [];
  }
}
