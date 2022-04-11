import { Characters } from "./Characters";

export interface State {
  characters: {
    loading: boolean;
    character: Characters[] | null;
  };
}
