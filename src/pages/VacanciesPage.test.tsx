import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { MantineProvider } from '@mantine/core'
import { fireEvent } from '@testing-library/react'
import { store } from '../store/store'
import { Provider } from "react-redux"
import VacanciesPage from '../pages/VacanciesPage'
import { configureStore } from '@reduxjs/toolkit'
import vacanciesReducer from '../store/vacanciesSlice'

test('renders the page title', () => {
    render (
    <Provider store = {store}>
      <MantineProvider>
        <VacanciesPage />
      </MantineProvider>
    </Provider>
    )

    const title = screen.getByText(/Список вакансий/i)
    expect(title).toBeInTheDocument()
})

test('shows "loading" when loading', () => {
    const testStore = configureStore({
        reducer: {
            vacancies: vacanciesReducer
        },
        preloadedState: {
            vacancies: {
                vacancies:[],
                search: '',
                loading: true,
                error: null,
                page: 1,
                city: null
            }
        }
    })

    render (
    <Provider store = {testStore}>
      <MantineProvider>
        <VacanciesPage />
      </MantineProvider>
    </Provider>
    )

    expect(screen.getByText(/Загрузка/i)).toBeInTheDocument()

})

test('renders Frontend Developer vacancy', () => {
    const testStore = configureStore({
        reducer: {
            vacancies: vacanciesReducer
        },
        preloadedState: {
            vacancies: {
                vacancies:[
                    {
                        id: '1',
                        name: 'FrontEnd разработчик',
                        employer: { name: 'Google '},
                        area: { name: 'Москва' },
                        experience: { name: 'Без опыта' },
                        schedule: { name: 'гибрид' },
                        alternate_url: 'https://hh.ru'
                    }
                ],
                search: '',
                loading: false,
                error: null,
                page: 1,
                city: null
                }
        }
    })

    render(
        <Provider store = {testStore}>
            <MantineProvider>
                <VacanciesPage />
            </MantineProvider>
            </Provider>
    )
    const vacancy = screen.getAllByText(/FrontEnd разработчик/i)
    expect(vacancy[0]).toBeInTheDocument()
})

test('filters vacancies via imput field', () => {
    const testStore = configureStore({
        reducer: {
            vacancies: vacanciesReducer
        },
        preloadedState: {
            vacancies: {
                vacancies:[
                    {
                        id: '1',
                        name: 'FrontEnd разработчик',
                        employer: { name: 'Google '},
                        area: { name: 'Москва' },
                        experience: { name: 'Без опыта' },
                        schedule: { name: 'гибрид' },
                        alternate_url: 'https://hh.ru'
                    },
                    {
                        id: '2',
                        name: 'BackEnd разработчик',
                        employer: { name: 'Yandex '},
                        area: { name: 'Санкт-Петербург' },
                        experience: { name: 'Опыт 1-3 года' },
                        schedule: { name: 'офис' },
                        alternate_url: 'https://hh.ru'
                    }
                ],
                search: '',
                loading: false,
                error: null,
                page: 1,
                city: null
                }
        }
    })
    render(
        <Provider store = {testStore}>
            <MantineProvider>
                <VacanciesPage />
            </MantineProvider>
        </Provider>
    )

    const input = screen.getAllByPlaceholderText(/Должность или название компании/i)[0]
    fireEvent.change(input, {
        target: { value: 'frontend'}
    })

    expect(screen.getAllByText(/FrontEnd разработчик/i)[0]).toBeInTheDocument()
    expect(screen.queryByText(/BackEnd разработчик/i)).not.toBeInTheDocument()
    
})

test('shows all vacancies when no filters', () => {
    const testStore = configureStore({
        reducer: {
            vacancies: vacanciesReducer
        },
        preloadedState: {
            vacancies: {
                vacancies:[
                    {
                        id: '1',
                        name: 'FrontEnd разработчик',
                        employer: { name: 'Google '},
                        area: { name: 'Москва' },
                        experience: { name: 'Без опыта' },
                        schedule: { name: 'гибрид' },
                        alternate_url: 'https://hh.ru'
                    },
                    {
                        id: '2',
                        name: 'BackEnd разработчик',
                        employer: { name: 'Yandex '},
                        area: { name: 'Санкт-Петербург' },
                        experience: { name: 'Опыт 1-3 года' },
                        schedule: { name: 'офис' },
                        alternate_url: 'https://hh.ru'
                    }
                ],
                search: '',
                loading: false,
                error: null,
                page: 1,
                city: null
                }
        }
    })
    render(
        <Provider store = {testStore}>
            <MantineProvider>
                <VacanciesPage />
            </MantineProvider>
        </Provider>
    )

    expect(screen.getAllByText(/разработчик/i).length).toBeGreaterThan(0)
    
})

test('resets page to 1 when search changes', () => {
  const testStore = configureStore({
    reducer: { vacancies: vacanciesReducer },
    preloadedState: {
      vacancies: {
        vacancies: [],
        search: '',
        loading: false,
        error: null,
        page: 3,
        city: null
      }
    }
  })

  render(
    <Provider store={testStore}>
      <MantineProvider>
        <VacanciesPage />
      </MantineProvider>
    </Provider>
  )

  const input = screen.getAllByPlaceholderText(/Должность/i)[0]

  fireEvent.change(input, {
    target: { value: 'react' }
  })

  expect(testStore.getState().vacancies.page).toBe(1)
})

test('does not show error when error is null', () => {
  const testStore = configureStore({
    reducer: { vacancies: vacanciesReducer },
    preloadedState: {
      vacancies: {
        vacancies: [],
        search: '',
        loading: false,
        error: null,
        page: 1,
        city: null
      }
    }
  })

  render(
    <Provider store={testStore}>
      <MantineProvider>
        <VacanciesPage />
      </MantineProvider>
    </Provider>
  )

  expect(screen.queryByText(/Ошибка/i)).not.toBeInTheDocument()
})