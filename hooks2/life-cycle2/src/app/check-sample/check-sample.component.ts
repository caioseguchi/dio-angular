import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css',
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantidade: number = 0;

  adicionar() {
    this.quantidade += 1;
  }

  decremento() {
    this.quantidade -= 1;
  }

  //checked -> content -> view
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  //Quando o conteudo e inicializado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  //Depois da inicializacao da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  //Apos alguma alteracao, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  //apos alguma ateracao, verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  constructor() {}
  ngOnDestroy(): void {
    console.log('goodbuy my frientd');
  }
}
