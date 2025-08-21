import { configureStore } from "@reduxjs/toolkit";
import dessertReduser from "./features/dessertsSlice";

export const store = configureStore({
  reducer: { desserts: dessertReduser },
});
