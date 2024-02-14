import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Card = ({ pokemon, queryKey }: any) => {
    const {data} = useQuery({
        queryKey: [queryKey, pokemon.name],
        queryFn: () =>
          fetch(pokemon.url).then(res => res.json()),
      });
  return (
    <View style={styles.card}>
      <Image source={{ uri: data?.sprites?.front_default }} style={styles.image} />
      <Text style={styles.name}>{data?.name}</Text>
      <View style={styles.info}>
        <Text style={styles.text}>#{data?.order}</Text>
        {/* <Text style={styles.text}>Type: {data?.types?.map(item => item.type.name).join(", ")}</Text>
        <Text style={styles.text}>HP: {data?.stats[0]?.base_stat}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: 'red',
    resizeMode: 'cover',
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
