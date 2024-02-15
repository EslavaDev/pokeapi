import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {COLORS_TYPES} from '@src/constants/colors';
type Props = {
  types?: any[];
};

export const Types = ({types}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipos</Text>
      <View style={styles.typesContainer}>
        {types?.map?.((item: any) => (
          <View key={item.slot} style={style(item.type.name).view}>
            <Text style={{...styles.text}}>{item.type.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const style = (type: string) => ({
  view: {
    padding: 6,
    borderRadius: 10,
    backgroundColor: COLORS_TYPES[type as keyof typeof COLORS_TYPES],
  },
});
