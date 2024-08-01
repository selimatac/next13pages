// reducers/exampleSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

export const getTodos: any = createAsyncThunk(
  "getTodos",
  async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );

    return response.data;
  }
);

const exampleSlice = createSlice({
  name: "example",
  initialState: {
    value: 0,
    durumu: "yok",
    data: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        const nextState = {
          ...state,
          ...action.payload,
        };
        if (state.data?.length) {
          nextState.data = state.data;
        }

        return nextState;
      })
      .addCase(getTodos.pending, (state) => {
        state.durumu = "pending";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.durumu = "data geldi";
      })
      .addCase(getTodos.rejected, (state) => {
        state.durumu = "rejected";
      });
  },
});

export const { increment, decrement } = exampleSlice.actions;
export default exampleSlice.reducer;
