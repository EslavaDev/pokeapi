import {Layout} from '@src/commons/components/Layout';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {QueryKeys} from './constants';
import {useNavigation} from '@react-navigation/native';
import {Card} from '@src/commons/components/Cards';
import {useState} from 'react';
import useDebounce from '@src/commons/hooks/useDebounce';

const fetchPokemons = async ({pageParam = 0}) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=10`,
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const debouncedSearchTerm = useDebounce(searchQuery, 1500);
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
    queryFn: fetchPokemons,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length * 10 : undefined;
    },
  });

  const searchResultsQuery = useQuery({
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${debouncedSearchTerm?.toLowerCase()}`).then(
        res => res.json(),
      ),
    queryKey: ['searchPokemons', debouncedSearchTerm],
    enabled: !!debouncedSearchTerm?.length,
  });
  console.log('🚀 ~ HomePage ~ data:', searchResultsQuery?.data);

  const handleSearch = query => {
    setSearchQuery(query);
    // Si la query está vacía, puedes querer resetear la búsqueda o simplemente ignorarlo
  };

  return (
    <Layout>
      <View style={{flex: 1, width: '100%'}}>
        <TextInput
          placeholder="Buscar Pokémon"
          value={searchQuery ?? ''}
          onChangeText={handleSearch}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
        />
        {isLoading ? <Text>Loading...</Text> : null}
        {isError ? <Text>{error?.message}</Text> : null}
        {!!searchQuery?.length ? (
          searchResultsQuery.isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : searchResultsQuery.isError ? (
            <Text>Error: {searchResultsQuery.error.message}</Text>
          ) : // Si la búsqueda fue exitosa y hay datos, renderiza el resultado
          searchResultsQuery.data ? (
            <Card pokemon={searchResultsQuery.data} />
          ) : (
            <Text>No se encontraron resultados</Text>
          )
        ) : (
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
              if (hasNextPage) fetchNextPage();
            }}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isFetchingNextPage ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : null
            }
          />
        )}
      </View>
    </Layout>
  );
};
