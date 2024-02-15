import {useRoute} from '@react-navigation/native';
import {Layout} from '@src/commons/components/Layout';
import {useQuery} from '@tanstack/react-query';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import {pokemonFullDataService} from '../home/services';
import {EvolutionPokemon} from './components/EvolutionPokemon';

export const DetailPage = () => {
  const {params} = useRoute<any>();
  const {pokemon} = params || {};

  const {data: evolution} = useQuery({
    queryKey: ['evolve'],
    queryFn: pokemonFullDataService(pokemon.species.url),
  });

  const _renderItem = ({item}: any) => {
    return (
      <View style={{backgroundColor: ''}}>
        <Image
          source={{
            uri: item,
          }}
          style={{width: 150, height: 150, resizeMode: 'cover'}}
        />
      </View>
    );
  };

  const imagePokemon = Object.values(pokemon?.sprites || {}).filter(
    (item: any) => typeof item === 'string' && item.includes('https'),
  );

  return (
    <Layout justifyContent="center" scroll>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>{pokemon.name}</Text>
      </View>
      <View style={{flex: 0.5}}>
        <FlatList data={imagePokemon} renderItem={_renderItem} horizontal />
      </View>
      <View
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          flexDirection: 'column',
          backgroundColor: 'green',
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>
            Stats
          </Text>
          {pokemon.stats.map((item: any) => (
            <View
              key={item.stat.name}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 3,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {item.stat.name} :
              </Text>
              <Text>{item.base_stat}</Text>
            </View>
          ))}
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>
            Tipos
          </Text>
          {pokemon.types.map((item: any) => (
            <View key={item.slot}>
              <Text style={{fontSize: 15}}>{item.type.name}</Text>
            </View>
          ))}
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>
            Evoluciones
          </Text>
          <EvolutionPokemon url={evolution?.evolution_chain?.url} />
        </View>
      </View>
    </Layout>
  );
};
