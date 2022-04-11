import { State } from "../../interfaces";

export const charactersSelector = (state: State) => {
  const {
    characters: { characters = {} },
  } = state || {};

  return characters;
};
