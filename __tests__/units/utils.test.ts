import {describe, expect, test} from '@jest/globals';
import {evolveRecursion} from '@src/modules/detail/utils';
import {evolutionBulbasaur} from '../../results/constants';

describe('Utils', () => {
  test('should return a list with evolutions', async () => {
    const result = evolveRecursion(evolutionBulbasaur.chain, []);
    expect(result).toEqual(['bulbasaur', 'ivysaur', 'venusaur']);
  });
});
