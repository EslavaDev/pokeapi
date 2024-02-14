import {FlexStyle, StyleSheet} from 'react-native';
interface Props {
  justifyContent: FlexStyle['justifyContent'];
  position?: FlexStyle['position'];
}
export const stylesLayout = (
  {justifyContent, position}: Props,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent,
      position,
      width: '100%',
    },
    keyboard: {
      flex: 1,
    },
  });
