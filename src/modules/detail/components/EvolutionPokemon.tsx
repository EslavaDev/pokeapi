import {pokemonFullDataService} from '@src/modules/home/services';
import {useQuery} from '@tanstack/react-query';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import {evolveRecursion} from '../utils';

export const EvolutionPokemon = ({url}: any) => {
  const {data: evolution} = useQuery({
    queryKey: ['evolution', url],
    queryFn: pokemonFullDataService(url),
    select: data =>
      data.chain.evolves_to.map((result: any) => [
        data.chain.species.name,
        ...evolveRecursion(result),
      ]),
  });

  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <Text style={{fontSize: 20}}>{evolution?.join(' => ')}</Text>
    </View>
  );
};
