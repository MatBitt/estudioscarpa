import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topico',
  standalone: true,
  imports: [],
  templateUrl: './topico.component.html',
  styleUrl: './topico.component.css'
})
export class TopicoComponent {
  @Input() topico:string = ''
}
