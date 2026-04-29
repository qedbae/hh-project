export const  getVacancies = () => {
    const basicData = [
        {
            id: '1',
            name: 'FrontEnd разработчик',
            salary: {from: 70000, to: 110000, currency: '₽'},
            experience: {name: 'Опыт 1-3 года'},
            schedule: {name: 'Можно удаленно'},
            employer: {name: 'Google'},
            area: {name: 'Москва'},
            skills: ['React', 'TypeScript'],
            alternate_url: 'https://hh.ru/vacancy/123456',
        },
        {
            id: '2',
            name: 'FrontEnd разработчик в казино',
            salary: {from: 30000, to: 970000, currency: '₽'},
            experience: {name: 'Без опыта'},
            schedule: {name: 'Офис'},
            employer: {name: '777'},
            area: {name: 'Уфа'},
            skills: ['React', 'TypeScript', 'ReduxToolkit', 'JavaScript'],
            alternate_url: 'https://hh.ru/vacancy/123456',
        },
        {
            id: '3',
            name: 'FrontEnd разработчик в стартап',
            salary: {from: 15000, to: 200000, currency: '₽'},
            experience: {name: 'Без опыта'},
            schedule: {name: 'Гибрид'},
            employer: {name: 'Точно стрельнет'},
            area: {name: 'Замоскворечье'},
            skills: ['React', 'ReduxToolkit', 'Redux'],
            alternate_url: 'https://hh.ru/vacancy/123456',
        },
        {
            id: '4',
            name: 'FrontEnd разработчик в маркетинговую компанию',
            salary: {from: 30000, currency: '₽'},
            experience: {name: 'Опыт 3-6 лет'},
            schedule: {name: 'Офис'},
            employer: {name: 'Маркетинг и точка'},
            area: {name: 'Санкт-Петербург'},
            skills: ['React', 'TypeScript', 'Nextjs'],
            alternate_url: 'https://hh.ru/vacancy/123456',
        },
        {
            id: '5',
            name: 'FrontEnd разработчик в Dev.net',
            salary: {from: 80000, to: 110000, currency: '₽'},
            experience: {name: 'Опыт 3-6 лет'},
            schedule: {name: 'Можно удаленно'},
            employer: {name: '888'},
            area: {name: 'Новосибирск'},
            alternate_url: 'https://hh.ru/vacancy/123456',
        },
        {
        id: '6',
            name: 'FrontEnd разработчик в EdTech продукт',
            salary: {to: 170000, currency: '₽'},
            experience: {name: 'Опыт 1-3 года'},
            schedule: {name: 'Гибрид'},
            employer: {name: 'EdTech'},
            area: {name: 'Москва'},
            skills: ['React', 'TypeScript', 'ReduxToolkit', 'JavaScript'],
            alternate_url: 'https://hh.ru/vacancy/123456',
        }
    ]

    const moreData = Array.from({ length: 100 }, (_, i) => {
        const item = basicData[i % basicData.length]

        return {
            ...item,
            id: String(i),
        }
    })

    return Promise.resolve(moreData)

}