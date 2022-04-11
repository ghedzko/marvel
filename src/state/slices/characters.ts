import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { State } from "../../interfaces";
import { fetchCharacters } from "../../services/characters";
const initialState = {
  characters: null,
  status: "idle",
};

export const getCharacters = createAsyncThunk<
  any,
  void,
  {
    state: State;
  }
>("characters/fetch", async (_, thunkApi) => {
  const response: any = await fetchCharacters();
  return response;
});

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        return {
          ...state,
          status: "loading",
        };
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        return {
          ...state,
          status: "idle",
          characters: action.payload,
        };
      });
  },
});

export default charactersSlice.reducer;
