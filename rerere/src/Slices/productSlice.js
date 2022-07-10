import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState:
    {
        success: false,
        product: null,
    },
    reducers: {
        cleanState:(state) =>{
            state.success = false;
            state.product = null;
        }
    },
    extraReducers(builder)
    {
        builder.addCase(createProduct.fulfilled, (state, action) =>
        {
            if (action.payload.error) {
                state.success = false;
                state.product = null;
            } else {
                state.success = true;
                state.product = action.payload;
            }
            
        })
        .addCase(createProduct.rejected, (state) => {
            state.success = false;
            state.product = null;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            
            if (action.payload.error) {
                state.success = false;
                state.product = null;
            } else {
                state.success = true;
                state.product = action.payload;
            }
        })
        .addCase(getProducts.rejected, (state) => {
            state.success = false;
            state.product = null;;
        })
        .addCase(getProductsFiltered.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.success = false;
                state.product = null;
            } else {
                state.success = true;
                state.product = action.payload;
            }
        })
        .addCase(getProductsFiltered.rejected, (state) => {
            state.success = false;
            state.product = null;
        })
        .addCase(getUserProducts.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.success = false;
                state.product = null;
            } else {
                state.success = true;
                state.product = action.payload;
            }
        })
        .addCase(getProductsCategory.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.success = false;
                state.product = null;
            } else {
                state.success = true;
                state.product = action.payload;
            }
        })
        .addCase(getProductsCategory.rejected, (state) => {
            state.success = false;
            state.product = null;
        })
    }

});

export const {cleanState} = productSlice.actions;

export const createProduct = createAsyncThunk('products/createProduct', async ( product, { getState }) => {
    const state = getState();
    const formData = new FormData();
    formData.append('file', product.img);
    const uploadFileFetch = await fetch('http://localhost:7500/upload', {
        method: 'POST',
        headers: {Authorization: `Bearer ${state.user.user.token}`},
        body: formData,
    });
    const uploadFileData = await uploadFileFetch.json();
    product.picture = uploadFileData.url; 
    const createProductFetch = await fetch('http://localhost:7500/products', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.user.user.token}`
        },
        body: JSON.stringify(product),
    });
    const productData = await createProductFetch.json();
    if (createProductFetch.status === 200) {
        return productData;
    } else {
        return {
            error: true,
            message: productData.error.message,
        }
    }
});

export const getProducts = createAsyncThunk('/products/', async (credentials, {getState}) => {
    const state = getState();
     const productsFetch = await fetch('http://localhost:7500/products', {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${state.user.user.token}`
        },
     });
     const products = await productsFetch.json();
     if (productsFetch.status === 200) {
         return products;
     } else {
         return {
             error: true,
             message: products.error.message,
         }
     }
 });

 export const getProductsFiltered = createAsyncThunk('products/productList', async (credentials, { getState }) => {
    const state = getState();
    const filterProductsFetch = await fetch('http://localhost:7500/products/productList', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${state.user.user.token}`
        },
        body: JSON.stringify({
            name: credentials,
            
        }),
    });
    const userData = await filterProductsFetch.json();
    console.log(userData);
    if (filterProductsFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const getProductsCategory = createAsyncThunk('products/productCategory', async (credentials, { getState }) => {
    const state = getState();
    const filterProductsFetch = await fetch('http://localhost:7500/products/productCategory', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${state.user.user.token}`
        },
        body: JSON.stringify({
            category: credentials,
            
        }),
    });
    const products = await filterProductsFetch.json();;
    if (filterProductsFetch.status === 200) {
        return products;
    } else {
        return {
            error: true,
            message: products.error.message,
        }
    }
});

export const getUserProducts = createAsyncThunk('/products/userProducts', async(email, { getState }) => {
    const state = getState();
    const productsFetch = await fetch('http://localhost:7500/products/userProducts', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.user.user.token}`
        },
        body: JSON.stringify({
            email: email,
        }),
    });
   
    const products = await productsFetch.json();
 
    if (productsFetch.status === 200) {
        return products;
    } else {
        return {
            error: true,
            message: products.error.message,
        }
    }
})

export default productSlice.reducer;