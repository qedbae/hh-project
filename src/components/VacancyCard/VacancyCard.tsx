import { Card, Text, Button, Flex, Badge, } from '@mantine/core'
import type { Vacancy } from '../../types/vacancy'
import { getScheduleColor } from '../../utils/getScheduleColor'
import { formatSlary } from '../../utils/formatSalary'

type VacancyCardProps = {
    vacancy: Vacancy
}

function VacancyCard({vacancy}: VacancyCardProps) {

    const styles = getScheduleColor(vacancy.schedule.name)

    return (
        <Card>
            <Text fw={600} size='lg' c='#364FC7'>{vacancy.name}</Text>
            <Flex gap={20} align='center' mb={10}>
                <Text>{formatSlary(vacancy.salary)}</Text>
                <Text c='dimmed' fw={400} size='sm'>{vacancy.experience.name}</Text>
            </Flex>
            <Text c='dimmed' fw={400} size='sm' mb={10}>{vacancy.employer.name}</Text>
            <Badge
            fw={700}
            variant='filled'
            mb={4}
            style={{ 
                ...styles,
                borderRadius: '4px', 
                fontSize: '9px',
                textTransform: 'uppercase'
            }}
            >{vacancy.schedule.name}</Badge> 
            <Text fw={400} size='md' mb={10}>{vacancy.area.name}</Text>
            <Flex gap='md'>
                <Button fw={400} 
                style={{background: '#0F0F10'}}>Смотреть вакансию</Button>
                <Button fw={400} c='black'
                style={{background: '#0F0F101A'}}>Откликнуться</Button>
            </Flex>
        </Card>
    )
}

export default VacancyCard