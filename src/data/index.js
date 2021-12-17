import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import joke from "./joke";

const reducer = {
  joke
};
export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
