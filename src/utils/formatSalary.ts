import type { Vacancy } from "../types/vacancy"


export const formatSlary =(salary? : Vacancy['salary']) => {
    if(!salary) return 'Не указано'

    const from = salary.from
    const to = salary.to
    const currency = salary.currency || ''

    if(from && to) {
        return `${from.toLocaleString()} – ${to.toLocaleString()} ${currency}`
    }

    if(from) {
        return `от ${from.toLocaleString()} ${currency}` 
    }

    if(to) {
        return `до ${to.toLocaleString()} ${currency}`
    }
    
    return 'Не указано'
}