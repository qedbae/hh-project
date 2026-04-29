import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Vacancy } from '../types/vacancy'
import { getVacancies } from "../api/VacanciesApi";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchVacancies = createAsyncThunk<
    Vacancy[],
    void,
    { rejectValue:string }
    >(
    'vacancies/fetchVacancies',
    async(_, { rejectWithValue }) => {
        try {
            const data = await getVacancies()
            return data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

type VacanciesState = {
    vacancies: Vacancy[]
    search: string
    loading: boolean
    error: string | null
    page: number
    city: string | null
}

const initialState: VacanciesState = {
    vacancies: [],
    search: '',
    loading: false,
    error: null as string | null,
    page: 1,
    city: null
}

const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },

        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },

        setCity(state, action: PayloadAction<string | null>) {
            state.city = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancies.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchVacancies.fulfilled, (state, action) => {
                state.vacancies = action.payload
                state.loading = false
            })
            .addCase(fetchVacancies.rejected, (state, action) => {
                state.loading = false
                state.error = (action.payload as string) || 'Ошибка'
            })
    }
})


export const { setSearch, setPage, setCity } = vacanciesSlice.actions
export default vacanciesSlice.reducer