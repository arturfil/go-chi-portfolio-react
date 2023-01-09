import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../helpers/agent";
import { Project } from "../../interfaces/Project";

interface ProjectState {
    projects: Project[] |  null;
    singleProject: Project | null;
    loading: boolean;
    errors: any[] | null;
}

const initialState: ProjectState = {
    projects: null,
    singleProject: null,
    loading: false,
    errors: []
}

export const getAllProjects = createAsyncThunk<Project[]>(
    "project/getAllProject",
    async (_, thunkAPI) => {
        try {
            const response = await agent.get("/projects")
            return response.data;
        } catch (error:any) {
            thunkAPI.rejectWithValue({error: error.data})
        }
    }
);

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProjects.fulfilled, (state, action) => {
            state.projects = action.payload;
        });
    }
});

export default projectSlice.reducer;