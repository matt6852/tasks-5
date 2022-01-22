import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchRhymes } from "./rhymesAPI";

export interface WordsState {
  status: "idle" | "loading" | "failed";
  words: any;
  term: string;
}

const initialState: WordsState = {
  status: "idle",
  words: [],
  term: "cool",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  "rhymes/fetchCount",
  async (word: string) => {
    const response = await fetchRhymes(word);

    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const wordsSlice = createSlice({
  name: "rhymes",
  initialState,
  reducers: {
    changeTerm: (state, action) => {
      state.term = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state, action) => {
        state.status = "loading";
        state.words = action.payload;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
        state.words = action.payload;
      });
  },
});

export const { changeTerm } = wordsSlice.actions;

export const selectCount = (state: RootState) => state.rhymes;

export default wordsSlice.reducer;
