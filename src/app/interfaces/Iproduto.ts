export interface IProduto {
    id:number
    src:string
    title:string
    desc:string
    preco:number
    quantidade:number
}

export interface ICategorias {
    categoria: string
    produtos: IProduto[]
}