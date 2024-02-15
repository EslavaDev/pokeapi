import {FlatList, Text, View} from 'react-native';
import {useInfiniteQuery} from '@tanstack/react-query';
import React from 'react';

import {Loader} from '@src/commons/components/Loader';
import {Layout} from '@src/commons/components/Layout';

import {QueryKeys} from './constants';
import {Card} from './components/Cards';
import {SearchPokemon} from './components/Search';
import {pokemonPaginationService} from '../../services';

export const HomePage = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: [QueryKeys.POKEMON_LIST],
    queryFn: pokemonPaginationService,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length * 10 : undefined;
    },
  });

  return (
    <Layout>
      <View style={{flex: 1, width: '100%'}}>
        <SearchPokemon>
          <FlatList
            data={data?.pages.flatMap(page => page.results)}
            contentContainerStyle={{
              justifyContent: 'space-between',
              padding: 5,
            }}
            renderItem={({item}) => <Card key={item.name} pokemon={item} />}
            keyExtractor={item => item.name}
            numColumns={2}
            onEndReached={() => {
              if (hasNextPage) {
                fetchNextPage();
              }
            }}
            onEndReachedThreshold={0.5}
            ListFooterComponent={<Loader validation={isFetchingNextPage} />}
          />
        </SearchPokemon>
        <Loader validation={isLoading} />
        {isError ? <Text>{error?.message}</Text> : null}
      </View>
    </Layout>
  );
};
