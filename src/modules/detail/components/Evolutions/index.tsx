import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EvolutionByPokemon} from './EvolutionByPokemon';

type Props = {
  evolution: any;
};

export const Evolutions = ({evolution}: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>Evoluciones</Text>
    <EvolutionByPokemon url={evolution?.evolution_chain?.url} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderColor: '#7a7a7a',
    borderWidth: 1,
    margin: 5,
    padding: 10,
    elevation: 3,
    gap: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '50%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
