import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
type Props = {
  types?: any[];
};

export const Types = ({types}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipos</Text>
      {types?.map?.((item: any) => (
        <View key={item.slot}>
          <Text style={styles.text}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
};
