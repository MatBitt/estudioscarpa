import { Component } from '@angular/core';
import { IProduto } from '../../interfaces/Iproduto';

@Component({
  selector: 'app-page-carrinho',
  standalone: true,
  imports: [],
  templateUrl: './page-carrinho.component.html',
  styleUrl: './page-carrinho.component.css'
})
export class PageCarrinhoComponent {
  carrinho: IProduto[] = []

}
