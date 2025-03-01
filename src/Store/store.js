import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import todoSlicer from "./slicers";

const store = configureStore({
    reducer: {
        todo: todoSlicer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;