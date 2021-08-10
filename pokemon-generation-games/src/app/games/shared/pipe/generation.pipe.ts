import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generation'
})
export class GenerationPipe implements PipeTransform {
  types = {
    'generation-i' : 'Primeira Geração',
    'generation-ii' : 'Segunda Geração',
    'generation-iii' : 'Terceira Geração',
    'generation-iv' : 'Quarta Geração',
    'generation-v' : 'Quinta Geração',
    'generation-vi' : 'Sexta Geração',
    'generation-vii' : 'Sétima Geração',
    'generation-viii' : 'Oitava Geração'
  };

  transform(value: any, ...args: any[]): any {
    if (value != null) {
      if (value instanceof Array && value.length > 0){
        return 'Geração';
      }
      return this.types[value];
    }
    return null;
  }
}
