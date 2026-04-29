import { Select, Card } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'


type FilterSideBarProps ={
    selectedCity: string | null
    onChange: (city: string | null) => void
}

function FilterSidebar({ selectedCity, onChange }: FilterSideBarProps) {
    return (
        <Card>
            <Select 
            data-testid='city-select'
            placeholder='Все города'
            leftSection={<IconMapPin size={12} />}
            value={selectedCity ?? 'all'}
            onChange={(value) => {
                if( value === 'all') {
                    onChange(null)
                } else {
                    onChange(value)
                }
            }}
            
            
            data={[
                {value: 'all', label: 'Все'}, 
                {value: 'Москва', label: 'Москва'},
                {value: 'Санкт-Петербург', label: 'Санкт-Петербург'}
            ]}/>
        </Card>
    )
}

export default FilterSidebar