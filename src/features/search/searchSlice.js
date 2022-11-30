import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    filterBySearch: (state, action) => {
      state.searchQuery = action.payload;
      localStorage.setItem("searchQuery", JSON.stringify(state.searchQuery));
    },
  },
});

export default searchSlice.reducer;
export const { filterBySearch, setSearchError } = searchSlice.actions;
