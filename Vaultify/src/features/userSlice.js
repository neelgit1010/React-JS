import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  users: [],
  currUser : null,
  loading: false,
  error: null,
  deposit: false,
  withDrawal: false,
  transactions: []
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

export const depositToAccount = createAsyncThunk(
  "deposit",
  async (data, {rejectWithValue}) => {
    try {
      const api = `https://675efd9d1f7ad24269974569.mockapi.io/vault/${data.id}`;
      const res = await fetch(api, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({blnc: data.amount}),
      });

      if (!res.ok) {
        // If the response status is not OK, reject with the error message
        throw new Error(`HTTP Error! Status: ${res.status}`);
      }

      const updatedCurrUser = await res.json();
      return {...updatedCurrUser, enteredAmount: data.enteredAmount}; // Return the updated user
    } catch (err) {
      return rejectWithValue(err.message); // Pass the error message to the reducer
    }
  }
)

export const withDrawalFromAccount = createAsyncThunk(
  "withdrawal",
  async (data, {rejectWithValue}) => {
    try {
      const api = `https://675efd9d1f7ad24269974569.mockapi.io/vault/${data.id}`;
      const res = await fetch(api, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({blnc: data.amount}),
      });

      if (!res.ok) {
        // If the response status is not OK, reject with the error message
        throw new Error(`HTTP Error! Status: ${res.status}`);
      }

      const updatedCurrUser = await res.json();
      return {...updatedCurrUser, enteredAmount: data.enteredAmount}; // Return the updated user
    } catch (err) {
      return rejectWithValue(err.message); // Pass the error message to the reducer
    }
  }
)

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login : (state, action) => {
      state.currUser = state.users.find(e => e.ac_no === action.payload.ac_no && e.pin === action.payload.pin)
    },
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
      })
      .addCase(depositToAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(depositToAccount.fulfilled, (state, action) => {
        state.loading = false;
      
        const isReceiver = state.currUser.id !== action.payload.id;
        if (isReceiver) {
          const receiverUser = state.users.find((e) => e.id === action.payload.id);
          if (receiverUser) {
            receiverUser.blnc = action.payload.blnc;
          }
        }else {
          state.currUser.blnc = action.payload.blnc;
          state.transactions.push(action.payload.enteredAmount)
        }
        state.deposit = true;
      })      
      .addCase(depositToAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error("Deposit failed")
      })
      .addCase(withDrawalFromAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(withDrawalFromAccount.fulfilled, (state, action) => {
        state.loading = false;
        
        if (state.currUser.id === action.payload.id) {
          state.currUser.blnc = action.payload.blnc;
          state.transactions.push(-action.payload.enteredAmount)
        }
        state.withDrawal = true;
      })      
      .addCase(withDrawalFromAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error("Withdrawal failed")
      });
  },
});

export const {login, deposit, withDrawal} = userSlice.actions

export default userSlice.reducer;
