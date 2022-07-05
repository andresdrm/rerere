import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userData from "../Pages/userData.json"

let users = userData;
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoggedIn: false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(postLogin.fulfilled, (state, action) => {
                if (action.payload.error) {
                    state.userIsLoggedIn = false;
                    state.user = null;
                    state.errorMessage = action.payload.message;
                } else {
                    state.userIsLoggedIn = true;
                    state.user = action.payload;
                }
            })
            .addCase(postLogin.rejected, (state) => {
                state.userIsLoggedIn = false;
                state.user = null;
            })
    }
});

export const { logout } = userSlice.actions;

export const postLogin = createAsyncThunk('usuarios/postLogin', async (credentials) => {
    console.log("User ", users);
    console.log("Credentials ", credentials);
    const loginFetch = await fetch('http://localhost:7500/users/login', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: credentials.username,
            password: credentials.password,
        }),
    });

    

    const userData = await loginFetch.json();
    if (loginFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export default userSlice.reducer;
