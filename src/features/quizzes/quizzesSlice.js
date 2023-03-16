import { createSlice } from "@reduxjs/toolkit";
import { addQuizzId } from "../topics/topicsSlice";

//thunk action creator, it will be dispatched when a user creates a new quizz
export const createQuizz = (payload) => {
    return (dispatch) => {
        dispatch(addQuizz(payload));
        dispatch(addQuizzId(payload));
    }
}

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuizz: (state, action) => {
            state.quizzes[action.payload.quizzId] = action.payload;
        }
    }
})

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const {addQuizz} = quizzesSlice.actions;

export default quizzesSlice.reducer;