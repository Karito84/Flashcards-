import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

//thunk action creator, it will be dispatched when a user creates a new quizz
export const addQuizForTopicId = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId(payload));
    }
}

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: { quizzes: {} },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
})

export const selectQuizzes = ( state ) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;