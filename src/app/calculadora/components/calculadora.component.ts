import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private num1: string;
  private num2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraServive: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * limpa a tela ao chamar a função limpar;
   */
  limpar(): void {
    this.num1 = '0';
    this.num2 = null;
    this.resultado = null;
    this.operacao = null;

  }

  AdicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.num1 = this.concatenarNumero(this.num1, numero);
    } else {
      this.num2 = this.concatenarNumero(this.num2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    //caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    //primeiro digito é '.', contatena '0' antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }
    //caso '.' é digitado e já contenha um '.' na string, apenas retorna o mesmo valor
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    //apenas define a operação caso não exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    /*Caso operação definida e numero 2 selecionado,
    efetua o cálculo da operação */

    if (this.num2 !== null) {
      this.resultado = this.calculadoraServive.calcular(parseFloat(this.num1), parseFloat(this.num2), this.operacao);
      this.operacao = operacao;
      this.num1 = this.resultado.toString();
      this.num2 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    if (this.num2 === null) {
      return;
    }

    this.resultado = this.calculadoraServive.calcular(parseFloat(this.num1), parseFloat(this.num2), this.operacao);
  }


//retorna o valor a ser exibido na tela da calculadora  }
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.num2 !== null) {
      return this.num2;
    }
    
    return this.num1;
  }

}
