import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service)=>{
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
  }));

  it('deve garantir que 1 / 4 = 0.25', 
    inject([CalculadoraService], (services: CalculadoraService) =>{
      let divisao = services.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.25);
    }
  ));

  it('deve garantir que 1 * 4 = 4',
    inject([CalculadoraService], (services: CalculadoraService) =>{
      let multiplicacao = services.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(4);
    }));

  it('deve garantir que 1 - 4 = -3',
    inject([CalculadoraService], (service) =>{
      let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    }));
});

