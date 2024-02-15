/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it, expect} from '@jest/globals';

import renderer from 'react-test-renderer';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {Card} from '@src/modules/home/components/Cards';
import {TouchableOpacity} from 'react-native';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(() => ({
    data: {
      name: 'Pikachu',
      sprites: {
        front_default: 'https://pokeapi.co/media/sprites/pokemon/25.png',
      },
      id: 25,
    },
  })),
}));
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

it('should navigate to the Detail screen when the card is pressed', () => {
  const pokemon = {
    name: 'Pikachu',
    sprites: {
      front_default: 'https://pokeapi.co/media/sprites/pokemon/25.png',
    },
    id: 25,
  };

  const mockNavigation = {
    navigate: jest.fn(),
  };
  useNavigation.mockReturnValue(mockNavigation);

  const component = renderer.create(
    <Card pokemon={pokemon} queryKey="pokemon" />,
  );

  component.root.findByType(TouchableOpacity).props.onPress();

  expect(mockNavigation.navigate).toHaveBeenCalledWith('Detail', {
    pokemon: pokemon,
  });
});

it('should render the card component without a pokemon object', () => {
  const component = renderer.create(<Card queryKey="pokemon" />);

  expect(component.toJSON()).toMatchSnapshot();
});
