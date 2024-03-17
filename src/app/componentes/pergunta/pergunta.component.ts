import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pergunta',
  standalone: true,
  imports: [],
  templateUrl: './pergunta.component.html',
  styleUrl: './pergunta.component.css'
})
export class PerguntaComponent {
  @Input() pergunta:string = ''
  @Input() resposta:string = ''
}
