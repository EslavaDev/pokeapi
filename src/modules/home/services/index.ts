export const pokemonPaginationService = async ({pageParam = 0}) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=10`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };;

export const searchPokemonService = (query: string) => async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${query?.toLowerCase()}`,
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const pokemonFullDataService = (url:string) => async () => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
    }


    export const pokemonEvolutionService =  (id : number) => async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    };