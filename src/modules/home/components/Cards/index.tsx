import {useQuery} from '@tanstack/react-query';
import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {pokemonFullDataService} from '../../../../services';

export const Card = ({pokemon, queryKey}: any) => {
  const navigation = useNavigation<any>();
  const {data} = useQuery({
    queryKey: [queryKey, pokemon.name],
    queryFn: pokemonFullDataService(pokemon?.url ?? ''),
    enabled: !pokemon?.sprites,
  });

  const pokemonData = data || pokemon;

  const onPress = useCallback(() => {
    navigation.navigate('Detail', {pokemon: pokemonData});
  }, [navigation, pokemonData]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image
        source={{uri: pokemonData?.sprites?.front_default}}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemonData?.name}</Text>
      <View style={styles.info}>
        <Text style={styles.text}>#{pokemonData?.id}</Text>
      </View>
    </TouchableOpacity>
  );
};
