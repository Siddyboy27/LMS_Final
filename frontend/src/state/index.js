import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
      
    },
    setUser:(state,action)=>{
      state.user=action.payload.user;
    }
  },
});

export const { setMode,setLogin,setLogout,setUser } = authSlice.actions;
export default authSlice.reducer;
