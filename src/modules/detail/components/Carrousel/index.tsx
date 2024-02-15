import React from 'react';
import {FlatList, Image, View} from 'react-native';
import styles from './styles';

type Props = {
  pokemon: any;
};
export const Carrousel = ({pokemon}: Props) => {
  const _renderItem = ({item}: any) => {
    return (
      <View>
        <Image
          source={{
            uri: item,
          }}
          style={styles.image}
        />
      </View>
    );
  };

  const imagePokemon = Object.values(pokemon?.sprites || {}).filter(
    (item: any) => typeof item === 'string' && item.includes('https'),
  );

  return (
    <View style={styles.container}>
      <FlatList data={imagePokemon} renderItem={_renderItem} horizontal />
    </View>
  );
};
