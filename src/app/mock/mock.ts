import { ICategorias } from '../interfaces/Iproduto';

export const mockProdutos: ICategorias[] = [
    {
      categoria: 'Planner',
      produtos: [
        {
          id:2,
          src: 'assets/estudioscarpa_FOTO2.jpg',
          title: 'titulo2',
          desc: 'desc2',
          preco: 10.50,
        },
      ]
    },
    {
      categoria: 'Sketchbook',
      produtos: [
        {
          id:1,
          src: 'assets/estudioscarpa_FOTO1.jpg',
          title: 'titulo1',
          desc: 'desc1',
          preco: 10.50,
        },
      ]
    },
    {
      categoria: 'Adesivos',
      produtos: [
        {
          id:5,
          src: 'assets/estudioscarpa_FOTO5.jpg',
          title: 'titulo5',
          desc: 'desc5',
          preco: 10.50,
        },
      ]
    },
    {
      categoria: 'Cartela',
      produtos: [
        {
          id:3,
          src: 'assets/estudioscarpa_FOTO3.jpg',
          title: 'titulo3',
          desc: 'desc3',
          preco: 10.50,
        },
      ]
    },
    {
      categoria: 'Bloquinho',
      produtos: [
        {
          id:4,
          src: 'assets/estudioscarpa_FOTO4.jpg',
          title: 'titulo4',
          desc: 'desc4',
          preco: 10.50,
        },
      ]
    }
]
