import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-title2',
  imports: [],
  templateUrl: './title2.component.html',
  styleUrl: './title2.component.css',
})
export class Title2Component implements OnInit, OnChanges {
  @Input() nome: string = '';

  constructor() {
    console.log(`Construtor ${this.nome}`);
  }

  ngOnChanges(): void {
    console.log(`OnChange ${this.nome}`);
  }

  ngOnInit(): void {
    this.nome = this.nome + 'x';
    console.log(`OnInit ${this.nome}`);
  }
}
