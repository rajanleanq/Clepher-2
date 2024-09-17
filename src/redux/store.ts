import { configureStore } from "@reduxjs/toolkit";
import postEngagementReducer from "./features/postEngagementSlice";

export const store = configureStore({
  reducer: {
    postEngagement: postEngagementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
