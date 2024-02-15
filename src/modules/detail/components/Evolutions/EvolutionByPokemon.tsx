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
      {evolution?.map((item: any, index: number) => (
        <Text key={`${item}-${index}`} style={styles.text}>
          {item?.join(' => ')}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
