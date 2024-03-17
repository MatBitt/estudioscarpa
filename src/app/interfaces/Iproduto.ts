export interface IProduto {
    id:number
    src:string
    title:string
    desc:string
    preco:number
    quantidade:number
    quantidadeAnterior:number
}

export interface ICategorias {
    categoria: string
    produtos: IProduto[]
}

export interface IPergunta {
    pergunta: string
    resposta: string
}