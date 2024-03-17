import { Routes } from '@angular/router';
import { PageProdutosComponent } from './paginas/page-produtos/page-produtos.component';
import { PageCarrinhoComponent } from './paginas/page-carrinho/page-carrinho.component';
import { PagePerguntasComponent } from './paginas/page-perguntas/page-perguntas.component';

export const routes: Routes = [
    { 
        path: '',  
        component: PageProdutosComponent, 
        pathMatch: 'full'
    },
    {
        path: 'carrinho',
        component: PageCarrinhoComponent
    },
    {
        path: 'perguntas-frequentes',
        component: PagePerguntasComponent
    }
];
