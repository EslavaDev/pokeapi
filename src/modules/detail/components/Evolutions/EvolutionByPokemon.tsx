import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {evolveRecursion} from '../../utils';
import {pokemonFullDataService} from '@src/services';

export const EvolutionByPokemon = ({url}: any) => {
  const {data: evolution} = useQuery({
    queryKey: ['evolution', url],
    queryFn: pokemonFullDataService(url),
    select: data =>
      data.chain.evolves_to.map((result: any) => [
        data.chain.species.name,
        ...evolveRecursion(result),
      ]),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{evolution?.join(' => ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 20,
  },
});
