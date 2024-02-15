import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 210,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderColor: '#7a7a7a',
    borderWidth: 1,
    margin: 5,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '50%',
  },
  typesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  text: {
    fontSize: 15,
    textTransform: 'capitalize',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
