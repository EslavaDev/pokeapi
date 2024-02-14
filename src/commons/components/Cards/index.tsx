import {useQuery} from '@tanstack/react-query';
import React, {useCallback} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Card = ({pokemon, queryKey}: any) => {
  console.log("🚀 ~ Card ~ pokemon:", pokemon)
  const navigation = useNavigation();
  const {data} = useQuery({
    queryKey: [queryKey, pokemon.name],
    queryFn: () => fetch(pokemon.url).then(res => res.json()),
    enabled: !!pokemon?.sprites,
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
        <Text style={styles.text}>#{pokemonData?.order}</Text>
        {/* <Text style={styles.text}>Type: {data?.types?.map(item => item.type.name).join(", ")}</Text>
        <Text style={styles.text}>HP: {data?.stats[0]?.base_stat}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex:1,
    maxHeight: 250,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: 'red',
    resizeMode: 'contain',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    textAlign: 'center',
    color: '#333',
  },
  info: {
    padding: 10,
  },
  text: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
