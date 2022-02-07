import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("task_templates/getData", async () => {
  return await fetch(
    "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
  ).then((res) => res.json());
});

const alumniSlice = createSlice({
  name: "template",
  initialState: {
    template: [],
    status: null,
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = "loading";
      state.template = action.payload;
    },
    [getData.fulfilled]: (state, action) => {
      state.status = "success";
      state.template = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.status = "failed";
      state.template = action.payload;
    },
  },
});

export default alumniSlice.reducer;
