import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunk 생성
export const fetchAPI = createAsyncThunk("items/fetchAPI", async (q) => {
    let url = `https://my-json-server.typicode.com/shining-jung/funiro/items`;
    if (q) {
        url += `${q}`;
    }
    let response = await fetch(url);
    let totalCount = response.headers.get("X-Total-Count");
    let data = await response.json();
    return { data, totalCount };
});

// Slice 생성
const itemsSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        status: "idle",
        error: null,
        totalCount: 0,
    },
    reducers: {
        loadData: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAPI.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAPI.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload.data;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(fetchAPI.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { extraReducers } = itemsSlice.actions;
export default itemsSlice.reducer;
