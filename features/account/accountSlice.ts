import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import agent from "../../helpers/agent";
import { User } from "../../interfaces/User";

export interface AccountState {
    user: User | null;
    loading: boolean;
    errors: null | any;
    isLoggedIn: boolean;
}

const initialState: AccountState = {
    user: null,
    loading: false,
    isLoggedIn: false,
    errors: ""
}

export const checkIfLoggedIn = createAsyncThunk<void>(
    "account/checkisLoggedIn",
    async (_, thunkAPI) => {
        try {
            // getting token from local storage
            const token = JSON.parse(localStorage.get(process.env.NEXT_PUBLIC_JWT!)!);
            if (!token) {
                thunkAPI.dispatch(setIsLoggedIn(false));
                return;
            }
            // token already added in headers by the agent we declared
            const response = await agent.get("/auth/user/bytoken");
            
            if (response.data.first_name) {
                thunkAPI.dispatch(setIsLoggedIn(true))                
            } else {
                thunkAPI.dispatch(setIsLoggedIn(false));
                return;
            }
        } catch (error) {
            thunkAPI.rejectWithValue({error});
        }
    }
)

export const loginUser = createAsyncThunk<any, User>(
    "account/loginUser",
    async (data, thunkAPI) => {
        try {
            const response:any = await agent.post("/auth/login", data);
            const {token} = response.data;
            localStorage.setItem(process.env.NEXT_PUBLIC_JWT!, JSON.stringify(token));
            toast.success("Successfully Logged In");
            thunkAPI.dispatch(setUser(response.data.user))
            thunkAPI.dispatch(setIsLoggedIn(true));
            thunkAPI.dispatch(setErrors(null));
            return response.data;
        } catch (error:any) {
            console.log("ERROR", error.response.data.message);
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);

export const logOut = createAsyncThunk<void>(
    "account/logOut",
    async (_, thunkAPI) => {
        localStorage.removeItem(process.env.NEXT_PUBLIC_JWT!);
        thunkAPI.dispatch(setIsLoggedIn(false));
    }
)

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.errors = action.payload
        });
    }
});

export const { setUser, setIsLoggedIn, setErrors } = accountSlice.actions;
export default accountSlice.reducer;