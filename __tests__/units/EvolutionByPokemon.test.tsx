/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it, expect} from '@jest/globals';

import renderer from 'react-test-renderer';
import {EvolutionByPokemon} from '@src/modules/detail/components/Evolutions/EvolutionByPokemon';
import {useQuery} from '@tanstack/react-query';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

it('should render the component without crashing', () => {
  const mockData = {
    data: [
      ['Bulbasaur', 'Ivysaur', 'Venusaur'],
      ['Charmander', 'Charmeleon', 'Charizard'],
      ['Squirtle', 'Wartortle', 'Blastoise'],
    ],
  };

  useQuery.mockImplementation(() => mockData);
  const component = renderer.create(
    <EvolutionByPokemon url="https://pokeapi.co/api/v2/pokemon/1" />,
  );

  // Assert that the component renders without crashing
  expect(component.toJSON()).toMatchSnapshot();
});
