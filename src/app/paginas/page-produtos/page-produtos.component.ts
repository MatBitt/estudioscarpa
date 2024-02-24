import { Component } from '@angular/core';
import { ICategorias } from '../../interfaces/Iproduto';
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

  redireciona(categoria: string) {
    var div = document.getElementById(categoria);
    if (div) {
        div.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
