import { Component } from '@angular/core';
import { PerguntaComponent } from '../../componentes/pergunta/pergunta.component';
import { IPergunta } from '../../interfaces/Iproduto';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-page-perguntas',
  standalone: true,
  imports: [PerguntaComponent],
  templateUrl: './page-perguntas.component.html',
  styleUrl: './page-perguntas.component.css'
})
export class PagePerguntasComponent {
  perguntas: IPergunta[] = [
    {
      pergunta: "Qual é o custo de envio?",
      resposta: "Nas entregas pela região de Brasília é cobrado um frete fixo de R$10,00.\nJá as entregas fora de Brasília, o cálculo do envio será feito após o endereço de entrega ser informado."
    },
    {
      pergunta: "Como se realizam os envios?",
      resposta: "Os envios são realizados todas as terças-feiras. Seja postagens no correio ou entregas por Brasília.\nPedidos feitos na segunda-feira, até às 18h ainda serão enviados no dia seguinte; passando do horário, serão enviados na terça-feira da próxima semana."
    },
    {
      pergunta: "Quais os prazos de entrega?",
      resposta: "Para os endereços de Brasília, a entrega é efetuada na terça feira seguinte ao pedido.\nJá endereços de fora, o prazo é dos correios, o que poderá ser visto pelo número de rastreio do pacote."
    },
    {
      pergunta: "Como funciona o rastreio do meu pedido?",
      resposta: "O rastreio informa a data que foi postado e quando sai para a entrega."
    },
    {
      pergunta: "O que devo fazer caso passe o prazo de entrega e meu pedido não chegar ou se meu pedido voltar?",
      resposta: "⋄ Caso o seu pedido não chegue nesse prazo, pode abrir uma reclamação no site dos correios AQUI.\n" +
      "⋄ Caso o pacote não seja entregue porque o carteiro não foi atendido, eles ainda tentam entregar mais uma vez. Caso você não atenda e o pacote retorne para mim,você terá que pagar o frete novamente (um valor menor do que o que já foi pago, então entre em contato comigo por e-mail para acertamos).\n" + 
      "⋄ Caso conste no rastreio que foi entregue mas você não recebeu, procure primeiro saber se alguém que mora com você ou no seu prédio recebeu.\n" +
      "⋄ Caso não tenha, entre em contato com os correios para se informar ou abra uma reclamação no site deles."
    },
    {
      pergunta: "Que devo fazer se o produto não chega em bom estado?",
      resposta: "Entre em contato comigo no email contato.estudio.scarpa@gmail.com e te enviaremos um novo após constatação por fotos ou estornaremos seu pagamento."
    },
  ]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
}
