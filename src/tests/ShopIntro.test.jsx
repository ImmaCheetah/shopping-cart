import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ShopIntro from '../components/ShopIntro/ShopIntro';

describe('Home page', () => {
    it('should render Enter Shop button', () => {
        render(<ShopIntro />)
        screen.debug()

        const button = screen.getByRole('button', {name: /Enter Shop/i})

        expect(button).toBeInTheDocument()
    })

    it('should call onClick when clicked', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup()
        render(<ShopIntro onClick={onClick}/>)

        const button = screen.getByRole('button', {name: /Enter Shop/i})

        await user.click(button)

        expect(onClick).toHaveBeenCalled()
    })

    it('should not call onClick when not clicked', async () => {
        const onClick = vi.fn();
        render(<ShopIntro onClick={onClick}/>)

        expect(onClick).not.toHaveBeenCalled()
    })
})