import { Pill, TextInput, Card, Group, Button, Flex, Text } from "@mantine/core"
import { useState } from "react"
import { IconPlus } from '@tabler/icons-react'

type KeySkillsInputProps = {
    skills: string[]
    setSkills: React.Dispatch<React.SetStateAction<string[]>>
}


function KeySkillsInput({ skills, setSkills }: KeySkillsInputProps) {
    const [inputValue, setInputValue] = useState('')
    
    const addSkill = () => {
        setSkills(prev => {
        const value = inputValue.trim()

        if(!value || prev.includes(value)) return prev
        return [...prev, value]
        })
        
        setInputValue('')
    }

    return(
        <Card w={317} mb={16}>
            <Text fw={600} >Ключевые навыки</Text>
            <Flex gap='xs' align='center' py={10}>
                <TextInput
                placeholder="Навык"
                value={inputValue}
                size='xs'
                onChange={(e) => setInputValue(e.currentTarget.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        addSkill()
                    }
                }}
                style={{ flex: 1 }}
                />
                <Button onClick={addSkill} w={34} p={0} h={30}
                style={{ background: '#4263EB' }}
                data-testid='add-skill-btn'>
                    <IconPlus size={24}/>
                </Button>
            </Flex>
            <Group gap='xs' wrap="wrap" py={10}>
                {skills.map((skill) => (
                    <Pill 
                    key={skill} 
                    withRemoveButton
                    onRemove={() => {
                        setSkills(prev => prev.filter(s => s !== skill))
                    }}
                    style={{
                        background: '#F6F6F7'
                    }}>
                        {skill}
                    </Pill>
                ))}
            </Group>
    </Card>
    )
}

export default KeySkillsInput