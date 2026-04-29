import { configureStore } from "@reduxjs/toolkit";
import vacanciesReducer from './vacanciesSlice'

export const store = configureStore({
    reducer: {
        vacancies: vacanciesReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>