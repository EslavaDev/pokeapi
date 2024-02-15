import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type Props = {
  stats?: any[];
};

export const Stats = ({stats}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      {stats?.map((item: any) => (
        <View key={item.stat.name} style={styles.statContainer}>
          <Text style={styles.statText}>{(item.stat.name as String).toUpperCase()} :</Text>
          <Text>{item.base_stat}</Text>
        </View>
      ))}
    </View>
  );
};
