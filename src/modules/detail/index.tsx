import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Layout} from '@src/commons/components/Layout';

import {Stats} from './components/Stats';
import {Types} from './components/Types';
import {Carrousel} from './components/Carrousel';
import {Evolutions} from './components/Evolutions';
import {ContentLayout} from './components/Content';
import {pokemonFullDataService} from '../../services';
import {capitalizeTitle} from '../../utils/index';

export const DetailPage = () => {
  const {params} = useRoute<any>();
  const navigation = useNavigation();
  const {pokemon} = params || {};

  navigation.setOptions({title: capitalizeTitle(pokemon?.name ?? 'Pokémon')});

  const {data: evolution} = useQuery({
    queryKey: ['evolve'],
    queryFn: pokemonFullDataService(pokemon.species.url),
  });
  return (
    <Layout justifyContent="center" scroll>
      <Carrousel pokemon={pokemon} />
      <ContentLayout>
        <Stats stats={pokemon?.stats} />
        <Types types={pokemon?.types} />
      </ContentLayout>
      <Evolutions evolution={evolution} />
    </Layout>
  );
};
