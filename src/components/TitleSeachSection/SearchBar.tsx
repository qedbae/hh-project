import { TextInput, Button, Flex } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

type SearchBarProps = {
    value: string
    onChange: (value: string) => void
}

function SearchBar({value, onChange} :SearchBarProps) {
    return (
        <Flex gap='xs' >
            <TextInput 
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
            style={{ minWidth: '403px' }}
            placeholder="Должность или название компании"
            leftSection={<IconSearch size={10}/>}
            />
            <Button
            style={{ background: '#4263EB' }}>
                Найти
            </Button>
        </Flex>
    )
}

export default SearchBar