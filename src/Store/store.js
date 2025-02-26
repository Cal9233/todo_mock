import { configureStore } from "@reduxjs/toolkit";
import { todoSlicer } from "./slicers";

export const store = configureStore({
    reducer: {
        todo: todoSlicer,
    }
})