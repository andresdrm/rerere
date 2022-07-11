import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Mixpanel from "../services/mixpanel";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userIsLoggedIn: false,
        isCreated: false,
        code: 0,
        date: ""
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.userIsLoggedIn = false;
            state.isCreated = false;
            state.code = 0;
            state.date = "";
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
            .addCase(recoverPassword.fulfilled, (state,action) =>{
                if(action.payload.error){
                    state.code = -1;
                    state.date = "";
                }else{
                    state.code = action.payload.code;
                    state.date = action.payload.expirationDate;
                    
                }
            })
            .addCase(recoverPassword.rejected, (state, action) => {
                
                state.errorMessage = action.type;
                state.code = -1;
                state.date = "";
            })
            .addCase(changePassword.fulfilled, (state,action) =>{
                if(action.payload.error){
                    state.code = -1;
                    state.date = null;
                }else{
                    state.code = 0;
                    state.date = null;
                    
                }
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.errorMessage = action.type;
                state.code = -1;
                state.date = null;
            })
    }
});


export const postLogin = createAsyncThunk('usuarios/postLogin', async (credentials) => {

    const loginFetch = await fetch('https://rerere-api.herokuapp.com/users/login', {
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
        Mixpanel.identify(userData.id);
        Mixpanel.people.set({
            $first_name: userData.name,
            $email: userData.email
        })

        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }

});

export const postCreateUser = createAsyncThunk('usuarios/postCreateUser', async (credentials) => {
    const formData = new FormData();
    const uploadFileFetch = await fetch('https://rerere-api.herokuapp.com/uploadUser', {
        method: 'POST',
        body: formData,
    });

    const uploadFileData = await uploadFileFetch.json();
    credentials.picture = uploadFileData.url; 
 

    const createUserFetch = await fetch('https://rerere-api.herokuapp.com/users/createUser', {

        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name : credentials.name,
            email: credentials.email,
            contrasena: credentials.password, 
            phone: credentials.phone,
            picture: credentials.picture
        })
    });

    const userData = await createUserFetch.json();
    if (createUserFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const editUser = createAsyncThunk('users/editUser', async(data, { getState }) =>{
    const state = getState();
    const editUserFetch = await fetch(`https://rerere-api.herokuapp.com/users/editUser/${data.id}`, {
     
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${state.user.user.token}`
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
    const recoverFetch = await fetch('https://rerere-api.herokuapp.com/users/recover-password/', {
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
        

        return {...recover, success:true};
    } else {
        return {
            success: false,
            error: true,
            message: recover.error.message,
        }
    }


})

export const newPassword = createAsyncThunk('users/editUser', async(data, { getState }) =>{
    const state = getState();
    const editUserFetch = await fetch(`https://rerere-api.herokuapp.com/users/editUser/${data.id}`, {
     
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${state.user.user.token}`
        },
        body: JSON.stringify({
            code : data.code,
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

export const changePassword = createAsyncThunk('users/editUser', async(data) =>{
    console.log("Data es: ", data)
    const editPasswordFetch = await fetch('https://rerere-api.herokuapp.com/users/changePassword', {
        
        method: 'PATCH',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: data.correo,
            contrasena: data.contrasena,
            confirmarContrasena: data.confirmarContrasena,
            code: data.givenCode,
            codigoExpiracion: data.codigoExpiracion
        })
    });

    const passwordData = await editPasswordFetch.json();
    if (editPasswordFetch.status === 200) {
        return passwordData;
    } else {
        return {
            error: true,
            message: passwordData.error.message,
        }
    }
});

export const logout = createAsyncThunk('users/logout', async () =>{
    return;
});

export default userSlice.reducer;
