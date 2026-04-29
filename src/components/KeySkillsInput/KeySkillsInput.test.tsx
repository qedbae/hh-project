import { render, screen } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { MantineProvider} from '@mantine/core'
import { fireEvent } from '@testing-library/react'
import KeySkillsInput from './KeySkillsInput'

test('removes skill on click', () => {
    const setSkills = vi.fn()

    render(
    <MantineProvider>
        <KeySkillsInput skills={['React']} setSkills={setSkills} />
    </MantineProvider>
    )

    const removeBtn = screen.getByRole('button')
    fireEvent.click(removeBtn)
    expect(setSkills).toHaveBeenCalled()
})
