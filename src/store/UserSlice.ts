
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  loading: boolean;
  user: any;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  user: null,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload; 
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
  }
});

export const { setLoading, setUser, setError } = userSlice.actions;
export default userSlice.reducer;
