import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { PageProdutosComponent } from "./paginas/page-produtos/page-produtos.component"
import { PageCarrinhoComponent } from './paginas/page-carrinho/page-carrinho.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, PageProdutosComponent, PageCarrinhoComponent]
})
export class AppComponent {
  title = 'estudioscarpa';
}
