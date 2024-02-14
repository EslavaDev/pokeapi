import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
      flex:1,
      maxHeight: 210,
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      overflow: 'hidden',
      borderColor: '#7a7a7a',
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
      backgroundColor: '#b9b8ae',
      resizeMode: 'contain',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 3,
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

  export default styles;