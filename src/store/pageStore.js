import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        pageId: "",
        pageName: "",
        pathVal: "",
    },
    reducers: {
        setPage: (state, action) => {
            state.pageId = action.payload.pageId;
            state.pageName = action.payload.pageName;
            state.pathVal = action.payload.pathVal;
        },
    },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
