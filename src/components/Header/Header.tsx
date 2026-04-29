import { Flex, Group, Image, Text } from '@mantine/core'
import logo from '../../assets/Logo.svg'
import avatar from '../../assets/Avatar.svg';


function Header() {
    return (
        <Flex px='sm' align='center' h={60}
        style={{boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'}}>
            <Group>
                <Image src={logo} alt='Logo' />
            </Group>
            <Group mx='auto'>
                <Text>Вакансии FE <span style ={{
                    color: '#4263EB',
                    width: '6px' }}>•</span></Text>
                <Flex align='center' gap='3'>
                    <Image src={avatar} alt='Avatar'
                    style={{ width: '18px'}}/>
                    <Text c='dimmed'>Обо мне</Text>
                </Flex>
            </Group>
            <Group></Group>
        </Flex>
    )
}

export default Header;