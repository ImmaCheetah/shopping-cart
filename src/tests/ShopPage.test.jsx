import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from '../routes';

global.fetch = vi.fn(() => {
    const data = [{ id: '1', title: 'shirt'}]
  
    return Promise.resolve({
      json: () => Promise.resolve(data),
    });
  })

const router = createMemoryRouter(routes, {initialEntries: ['/shop']})

describe('Quantity changes', () => {
    render(<RouterProvider router={router} />)
    const user = userEvent.setup()
    
    it('adds 1 to quantity', async () => {
        const plusBtn = screen.getByRole('button', {name: '+'})
        const input = screen.getByLabelText(/qty/i)
        screen.debug(undefined, 10000)
        
        await user.click(plusBtn)
        
        expect(input.value).toBe('2')
    })
    
    it('changes cart number when item added', async () => {
        const addBtn = screen.getByText('Add to Cart')
        screen.debug(undefined, 10000)
        const cartLink = screen.getByRole('link', {name: /cart/i})
        
        await user.click(addBtn)
        
        expect(cartLink.textContent).toBe('Cart 1')
    })
})