import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  users: [],
  currUser : null,
  loading: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "create",
  async (data, { rejectWithValue }) => {
    const api = "https://675efd9d1f7ad24269974569.mockapi.io/vault";
    const res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    try {
      const result = await res.json();
      return result;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    try {
      const api = `https://675efd9d1f7ad24269974569.mockapi.io/vault`;
      const res = await fetch(api);

      if (!res.ok) {
        // If the response status is not OK, reject with the error message
        throw new Error(`HTTP Error! Status: ${res.status}`);
      }

      const result = await res.json();
      return result; // Return the fetched users
    } catch (err) {
      return rejectWithValue(err.message); // Pass the error message to the reducer
    }
  }
);


export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login : (state, action) => {
      state.currUser = state.users.find(e => e.ac_no === action.payload)
    },
    deposit: (state, action) => {
      state.currUser.blnc += action.payload
    },
    withDrawal: (state, action) => {
      if(state.currUser.blnc > 0){
        state.currUser.blnc -= action.payload
        toast.success("Witdrawal successfull")
      }else{
        toast.error("Insufficient Balance")
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
        toast.success("Account Created Successfully")
        
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error("Something went wrong")
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload)
      });
  },
});

export const {login, deposit, withDrawal} = userSlice.actions

export default userSlice.reducer;
