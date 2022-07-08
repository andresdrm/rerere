import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoggedIn: false,
        isCreated: false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.isCreated = false;
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
            .addCase(postCreateUser.fulfilled, (state, action) => {
                if(action.payload.error){
                    state.isCreated = false;
                }else{
                    state.isCreated = true;
                }
            })
    }
});

export const { logout } = userSlice.actions;

export const postLogin = createAsyncThunk('usuarios/postLogin', async (credentials) => {
    console.log("Credentials ", credentials);
    const loginFetch = await fetch('http://localhost:7500/users/login', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: credentials.email,
            contrasena: credentials.password,
        }),
    });
    const userData = await loginFetch.json();
    console.log(userData);
    if (loginFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const postCreateUser = createAsyncThunk('usuarios/postCreateUser', async (credentials) => {
    console.log("Los credentials son: ", credentials)
    const createUserFetch = await fetch('http://localhost:7500/users/createUser', {
     
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name : credentials.name,
            email: credentials.email,
            contrasena: credentials.password, 
            phone: credentials.phone,
        })
    });

    const userData = await createUserFetch.json();
    console.log(userData);
    if (createUserFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export default userSlice.reducer;
