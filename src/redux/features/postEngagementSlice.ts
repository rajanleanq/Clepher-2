import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IProps {
  isLoading: boolean;
}
const initialState: IProps = {
  isLoading: false,
};

const postEngagementSlice = createSlice({
  name: "postEngagement",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const {} = postEngagementSlice.actions;

export default postEngagementSlice.reducer;
