import { configureStore } from "@reduxjs/toolkit";
import TemplateReducer from "./templateSlice";

const store = configureStore({
  reducer: {
    template: TemplateReducer,
  },
});


export default store;