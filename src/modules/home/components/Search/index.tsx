import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {PropsWithChildren, useState} from 'react';
import {Text, TextInput} from 'react-native';

import {Loader} from '@src/commons/components/Loader';
import useDebounce from '@src/commons/hooks/useDebounce';

import styles from './styles';
import {Card} from '../Cards';
import {searchPokemonService} from '../../../../services';

type Props = PropsWithChildren<{}>;

export const SearchPokemon = ({children}: Props) => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const debouncedSearchTerm = useDebounce(searchQuery, 1500);
  const searchResultsQuery = useQuery({
    queryFn: searchPokemonService(debouncedSearchTerm),
    queryKey: ['searchPokemons', debouncedSearchTerm],
    enabled: !!debouncedSearchTerm?.length,
  });
  let render = <Loader validation={searchResultsQuery.isLoading} />;
  if (searchResultsQuery.isError) {
    render = <Text>Error: {searchResultsQuery.error.message}</Text>;
  }
  if (searchResultsQuery.data) {
    render = <Card pokemon={searchResultsQuery.data} />;
  }
  if (!searchResultsQuery.data && !searchResultsQuery.isLoading) {
    render = <Text>No se encontraron resultados</Text>;
  }
  return (
    <>
      <TextInput
        placeholder="Buscar Pokémon"
        value={searchQuery ?? ''}
        onChangeText={setSearchQuery}
        style={styles.input}
      />
      {searchQuery?.length ? render : children}
    </>
  );
};
