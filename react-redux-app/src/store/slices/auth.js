import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Pls use your API key and Auth Domain
const app = initializeApp({
  apiKey: "",
  authDomain: "",
});

const auth = getAuth(app);

export const userSignIn = createAsyncThunk(
  "auth",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredentials.user.getIdToken();
      return token;
    } catch (err) {
      return rejectWithValue("Unable to sign in");
    }
  }
);

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userSignIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userSignIn.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    });
    builder.addCase(userSignIn.rejected, (state, action) => {
      state.loading = false;
      state.token = null;
      state.error = action.payload;
    });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;

// Pending, fulfilled, rejected
