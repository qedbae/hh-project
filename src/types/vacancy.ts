export type Vacancy = {
    id: string
    name: string
    salary?: {
        from?: number
        to?: number
        currency?: string
    } | null
    experience: {
        name: string
    }
    schedule: {
        name: string
    }
    employer: {
        name: string
    }
    area: {
        name: string
    }
    alternate_url: string
    skills?: string[]
}
