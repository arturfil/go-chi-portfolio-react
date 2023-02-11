import { configureStore } from "@reduxjs/toolkit";

import projectReducer from '../features/projects/projectSlice';
import accountReducer from '../features/account/accountSlice';

export const store = configureStore({
    reducer: {
        projects: projectReducer,
        account: accountReducer 
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;