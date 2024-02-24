import { Routes } from '@angular/router';
import { PageProdutosComponent } from './paginas/page-produtos/page-produtos.component';

export const routes: Routes = [
    { path: '',  component: PageProdutosComponent, pathMatch: 'full'},
];
