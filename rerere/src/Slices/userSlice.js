import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userIsLoggedIn: false,
        isCreated: false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.userIsLoggedIn = false;
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
            .addCase(logout.fulfilled, (state,action) => {
                state.user = null;
                state.userIsLoggedIn = false;
            })
    }
});


export const postLogin = createAsyncThunk('usuarios/postLogin', async (credentials) => {

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
    if (loginFetch.status === 200) {
        localStorage.setItem('user', userData);
        console.log('user data es: ',userData.email)
        console.log(localStorage.getItem('user'));
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

export const editUser = createAsyncThunk('users/editUser', async(data) =>{
    const editUserFetch = await fetch(`http://localhost:7500/users/editUser/${data.id}`, {
     
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name : data.name,
            email: data.email,
            contrasena: data.contrasena, 
            nuevaContrasena: data.nuevaContrasena,
            phone: data.phone,
            picture: data.picture
        })
    });

    const userData = await editUserFetch.json();
    if (editUserFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const recoverPassword = createAsyncThunk('users/recover-password', async(mail) =>{
    const recoverFetch = await fetch('http://localhost:7500/users/recover-password/', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        email : mail,
    })
});
    const recover = await recoverFetch.json();
    if (recoverFetch.status === 200) {
        return recover;
    } else {
        return {
            error: true,
            message: recover.error.message,
        }
    }


})

export const logout = createAsyncThunk('users/logout', async () =>{
    return;
});

export default userSlice.reducer;
