export interface IProduto {
    id:number
    src:string
    title:string
    desc:string
    preco:number
}

export interface ICategorias {
    categoria: string
    produtos: IProduto[]
}