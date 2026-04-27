import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const flowerCategories = [
  "Romance",
  "Birthday",
  "Congratulations",
  "Get Well",
  "Thank You",
  "New Baby",
  "Funeral",
];
const initialState = {
  flowerList: [],
  currentFlower: {},
  isLoading: false,
  selectedCategory: "all",
  error: "",
};

// const BASE_URL = "http://localhost:9000";
const BASE_URL = "http://localhost:8080";
export const fetchFlowers = createAsyncThunk("flower/fetchAll", async () => {
  const res = await fetch(`${BASE_URL}/flower/getAll`);
  const data = await res.json();
  return data;
});

// export const postFlower= createAsyncThunk
const flowerSlice = createSlice({
  name: "flower",
  initialState,
  reducers: {
    loading(state, action) {
      state.isLoading = true;
    },
    loadFlower(state, action) {
      state.flowerList = action.payload;
      state.isLoading = false;
    },
    flowerSelect(state, action) {
      state.currentFlower = action.payload;
      state.isLoading = false;
    },
    categorySelect(state, action) {
      state.selectedCategory = action.payload;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    rejected(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowers.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchFlowers.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log("FETCHING");

        // console.log(action.payload);
        state.flowerList = action.payload;
      })
      .addCase(fetchFlowers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export function getFlower(id) {
  return async function (dispatch) {
    try {
      dispatch(loading());
      const res = await fetch(`${BASE_URL}/flower/${id}`);
      const data = await res.json();

      dispatch(flowerSelect(data));
    } catch (err) {
      console.log(err);
    }
  };
}
export const {
  loading,
  loadFlower,
  flowerSelect,
  categorySelect,
  stopLoading,
  rejected,
} = flowerSlice.actions;

export default flowerSlice.reducer;
