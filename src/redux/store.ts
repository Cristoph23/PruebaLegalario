import { configureStore } from "@reduxjs/toolkit";
import datosStateGlobal from "./reducers/sliceDatos";

export default configureStore({
  reducer: {
    datosStateGlobal
  },
});
