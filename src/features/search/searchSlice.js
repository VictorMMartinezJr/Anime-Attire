import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  searchError: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    filterBySearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSearchError: (state, action) => {
      state.searchError = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { filterBySearch, setSearchError } = searchSlice.actions;
