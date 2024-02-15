export const evolveRecursion = (data: any, stack: any[] = []): any => {
  stack.push(data.species.name);

  if (data.evolves_to.length < 1) {
    return stack;
  }
  const nextEvolve = data?.evolves_to?.[0];

  return evolveRecursion(nextEvolve, stack);
};
