import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuizz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
})

export const selectQuizzes = (state) => state.quizzes.quizzes;


export default quizzesSlice.reducer;