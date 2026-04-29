export const getScheduleColor =(schedule: string) => {
    switch(schedule) {
        case 'Можно удаленно':
            return {
                background: '#4263EB',
                color: 'white'
         }

        case 'Офис':
            return {
                background: '#0F0F101A',
                color: '#0F0F1080'
            }

        case 'Гибрид':
            return {
                background: '#0F0F10',
                color: 'white'
            }

        default:
            return {
                background: '#0F0F101A',
                color: '#0F0F1080'
            }
    }
}