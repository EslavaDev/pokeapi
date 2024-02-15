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
  },
  text: {fontWeight: 'bold', fontSize: 25, textAlign: 'center'},
});
