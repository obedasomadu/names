import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRandomJoke = createAsyncThunk(
  "joke/getRandomJoke",
  async () => {
    let name = document.getElementById("name");
    let link = `https://api.agify.io/?name=${name.value}`;
    const response = await axios(link);
    return response.data;
  }
);

const jokeSlice = createSlice({
  name: "joke",
  initialState: {
    joke: {},
    loading: false,
    error: false,
    test: "Obed Asomadu"
  },
  reducers: {},
  extraReducers: {
    [getRandomJoke.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getRandomJoke.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [getRandomJoke.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.joke = payload;
    }
  }
});

export default jokeSlice.reducer;
