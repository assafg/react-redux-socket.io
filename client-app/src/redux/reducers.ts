import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface SimpleValue {
    value: number;
}

const initialState: SimpleValue = { value: 0 };

const simpleValuesSlice = createSlice({
    name: 'simpleValue',
    initialState,
    reducers: {
        updateValue: (state, action: PayloadAction<SimpleValue>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateValue } = simpleValuesSlice.actions;

export default simpleValuesSlice.reducer;
