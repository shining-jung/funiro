import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsStore";
import pageReducer from "./pageStore";

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        page: pageReducer,
    },
});
