import { createSlice } from "@reduxjs/toolkit";

export interface Users {
  postId: 1;
  id: 1;
  name: string;
  email: string;
  body: string;
}

export interface InitialPayload {
  loading: boolean;
  users: Users[];
}

const initialState: InitialPayload = {
  loading: false,
  users: [],
};
const reducerSlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    getStart(state) {
      state.loading = true;
    },
    getSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    getFail(state) {
      state.loading = false;
      state.users = [];
    },
  },
});

export const { getStart, getSuccess, getFail } = reducerSlice.actions;

export default reducerSlice;
