import {Layout} from '@src/commons/components/Layout';
import {useQuery} from '@tanstack/react-query';
import {Text, TouchableOpacity, View} from 'react-native';
import {QueryKeys} from './constants';
import { useNavigation } from '@react-navigation/native';
import { Card } from '@src/commons/components/Cards';

export const HomePage = () => {
    const navigation = useNavigation();
  const {data, isLoading, isError, error, isSuccess} = useQuery({
    queryKey: [QueryKeys.POKEMON_LIST],
    queryFn: () =>
      fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()),
  });

  return (
    <Layout>
      <View style={{flex: 1, backgroundColor: 'green', width: '100%'}}>
                {isLoading ? <Text>Loading...</Text> : null}
        {isError ? <Text>{error?.message}</Text> : null}
        {isSuccess ? data?.results?.map(item => (
            <TouchableOpacity onPress={()=>{
                console.log(item)
                navigation.navigate('Detail', {item: item})
            }}>
                <Card key={item.name} pokemon={item} />

            </TouchableOpacity>
            
        )) : null}
      </View>
    </Layout>
  );
};
