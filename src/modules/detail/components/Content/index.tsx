import React, {PropsWithChildren} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

type Props = PropsWithChildren<{}>;

export const ContentLayout = ({children}: Props) => (
  <View style={styles.layout}>{children}</View>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    backgroundColor: 'green',
  },
});
