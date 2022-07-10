import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        cards: null,
    },
    reducers: {
        cards: (state) => {
            state.cards = null;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getCards.fulfilled, (state, action) => {
                if (action.payload.error) {
                    state.cards = null;
                    state.errorMessage = action.payload.message;
                } else {
                    
                    state.cards = action.payload;
                }
            })
            .addCase(getCards.rejected, (state) => {
                state.cards = null;
            })
    }
});

export const { cards } = homeSlice.actions;

export const getCards = createAsyncThunk('/home', async () => {
    const cardsFetch = await fetch('http://localhost:7500/home/', {
        method: 'GET',
    });
    const cards = await cardsFetch.json();
    if (cardsFetch.status === 200) {
        return cards;
    } else {
        return {
            error: true,
            message: cards.error.message,
        }
    }
});


export default homeSlice.reducer;
