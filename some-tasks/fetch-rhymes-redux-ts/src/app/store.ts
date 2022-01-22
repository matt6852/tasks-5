import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/words/wordsSlice";

export const store = configureStore({
  reducer: {
    rhymes: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
