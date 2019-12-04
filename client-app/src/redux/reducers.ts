import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SimpleValue {
    value: string;
}

const initialState: SimpleValue = { value: '' };

const simpleValuesSlice = createSlice({
    name: 'simpleValue',
    initialState,
    reducers: {
        updateValue: (state, action: PayloadAction<SimpleValue>) => {
            return action.payload;
        },
    },
});

export const { updateValue } = simpleValuesSlice.actions;

export default simpleValuesSlice.reducer;
