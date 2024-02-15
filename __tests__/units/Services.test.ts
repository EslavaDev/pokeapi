import {describe, expect, test} from '@jest/globals';
import {
  pokemonEvolutionService,
  pokemonFullDataService,
  pokemonPaginationService,
  searchPokemonService,
} from '@src/services';
import {ivysaur} from '../../results/constants';

describe('Services', () => {
  test('should return a list with limit 10', async () => {
    const resolve = await pokemonPaginationService({pageParam: 0});
    expect(resolve.results).toHaveLength(10);
  });

  test('should return ivysaur with id in url', async () => {
    const ivysaurUrl = 'https://pokeapi.co/api/v2/pokemon/2';
    const resolve = await pokemonFullDataService(ivysaurUrl)();
    expect(resolve.species.name).toBe(ivysaur.species.name);
  });

  test('should return ivysaur with name in url', async () => {
    const ivysaurUrl = 'https://pokeapi.co/api/v2/pokemon/ivysaur';
    const resolve = await pokemonFullDataService(ivysaurUrl)();
    expect(resolve.species.name).toBe(ivysaur.species.name);
  });

  test('should return throw when not found pokemon', async () => {
    const resolve = await pokemonFullDataService(
      'https://pokeapi.co/api/v2/pokemon/fdsfds',
    );

    await expect(resolve).rejects.toThrow();
  });

  test('should return ivysaur with name', async () => {
    const resolve = await searchPokemonService('ivysaur')();
    expect(resolve.species.name).toBe(ivysaur.species.name);
  });

  test('should return ivysaur with id', async () => {
    const resolve = await searchPokemonService('2')();
    expect(resolve.species.name).toBe(ivysaur.species.name);
  });

  test('should not found pokemon with ', async () => {
    const resolve = await searchPokemonService('1999');
    await expect(resolve).rejects.toThrow();
  });

  test('should return evolve data', async () => {
    const resolve = await pokemonEvolutionService(1)();
    expect(resolve.chain.species.name).toBe('bulbasaur');
  });

  test('should return evolve not found', async () => {
    const resolve = await pokemonEvolutionService(1888);
    await expect(resolve).rejects.toThrow();
  });
});
