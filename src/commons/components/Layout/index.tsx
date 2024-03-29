import React from 'react';
import {FlexStyle, SafeAreaView, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {stylesLayout} from './styles';

interface Props {
  children: React.ReactNode;
  keyboard?: boolean;
  position?: FlexStyle['position'];
  justifyContent?: FlexStyle['justifyContent'];
  scroll?: boolean;
}

export const Layout = ({
  children,
  justifyContent = 'center',
  position = 'relative',
  keyboard = false,
  scroll = false,
}: Props) => {
  const styles = stylesLayout({justifyContent, position});
  let render = <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
  if (scroll) {
    render = (
      <ScrollView>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </ScrollView>
    );
  }
  if (keyboard) {
    render = (
      <KeyboardAwareScrollView
        style={styles.keyboard}
        contentContainerStyle={styles.container}>
        <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
  return render;
};
