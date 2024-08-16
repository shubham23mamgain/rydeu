import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import axios from "axios";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const server = "https://new-api-staging.rydeu.com/";
