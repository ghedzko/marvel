import { Characters } from "./Characters";

export interface State {
  characters: {
    loading: boolean;
    characters: Characters[] | null;
  };
}
