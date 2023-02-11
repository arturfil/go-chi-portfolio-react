import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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

export const getSingleProject = createAsyncThunk<Project, string | any>(
    "projects/getSingleProject",
    async (id, thunkAPI) => {
        try {
            const response = await agent.get("/projects/project/" + id);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({error});
        }
    }
)

export const createProject = createAsyncThunk<Project, Project>(
    "project/createProject",
    async (data, thunkAPI) => {
        try {
            const response = await agent.post("/projects/project", data);
            toast.success("Successfully created project");
            return response.data;
        } catch (error) {
            toast.error("Couldn't create project");
            return thunkAPI.rejectWithValue({error});
        }
    }
)

export const editProject = createAsyncThunk<Project, Project>(
    "project/editProject",
    async (data, thunkAPI) => {
        try {
            const {id, ...obj} = data;
            const response = await agent.put(`/projects/project/${id}`, obj);
            toast.success("Successfuly Updated Project");
            return response.data;
        } catch (error) {
            toast.error("Couldn't Update Project");
            return thunkAPI.rejectWithValue({error});
        }
    }
)

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProjects.fulfilled, (state, action) => {
            state.projects = action.payload;
        });
        builder.addCase(getSingleProject.fulfilled, (state, action) => {
            state.singleProject = action.payload;
        })
    }
});

export default projectSlice.reducer;