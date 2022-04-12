import { Character } from "./Characters";

export interface State {
  characters: {
    loading: boolean;
    characters: Character[];
  };
}
