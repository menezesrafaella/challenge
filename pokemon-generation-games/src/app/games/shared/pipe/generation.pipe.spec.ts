import { GenerationPipe } from './generation.pipe';

describe('GenerationPipe', () => {
  let pipe: GenerationPipe;
  beforeEach(() => {
    pipe = new GenerationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should providing transformation to true value', () => {
    expect(pipe.transform('generation-i')).toEqual('Primeira Geração');
  });

});
