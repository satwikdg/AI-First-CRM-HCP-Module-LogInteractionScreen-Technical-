import { createSlice } from '@reduxjs/toolkit';

const interactionSlice = createSlice({
  name: 'interaction',
  initialState: {
    hcp_name: '',
    product: '',
    sentiment: '',
    follow_up_needed: false,
    loading: false
  },
  reducers: {
    updateFields: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFields } = interactionSlice.actions;
export default interactionSlice.reducer;