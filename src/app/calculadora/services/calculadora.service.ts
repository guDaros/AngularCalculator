import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
/**
 *Define as constatntes utilizadas para
  identificar operações de calculo
 */

    public static readonly SOMA: string = '+';
    public static readonly SUBTRACAO: string = '-';
    public static readonly DIVISAO: string = '/';
    public static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado
   * dois números.
   * Suporta as operações básicas de soma, subtração, divisão
   * e multiplicação
   */

  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number;

    switch(operacao){
      case CalculadoraService.SOMA:
          resultado = num1 + num2;
        break;
        case CalculadoraService.SUBTRACAO:
          resultado = num1 - num2;
        break;
        case CalculadoraService.DIVISAO:
          resultado = num1 / num2;
        break;
        case CalculadoraService.MULTIPLICACAO:
          resultado = num1 * num2;
        break;
        default:
          resultado = 0;
        break;
    }

    return resultado;
  }
}
