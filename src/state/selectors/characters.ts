import { State } from "../../interfaces";

export const charactersSelector = (state: State) => {
  const { characters } = state.characters;

  return characters;
};
