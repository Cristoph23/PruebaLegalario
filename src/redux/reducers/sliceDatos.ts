import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: ""
};

export const datosStateGlobal = createSlice({
  name: "datosStateGlobal",
  initialState,
  reducers: {
    saveEmail: (state, action) => {
      state.email = action.payload;
    }
  },
});

export const { saveEmail } = datosStateGlobal.actions;

export default datosStateGlobal.reducer;
