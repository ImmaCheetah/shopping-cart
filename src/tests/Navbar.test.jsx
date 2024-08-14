import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import routes from '../routes';

const router = createMemoryRouter(routes)
it('shows all nav buttons', () => {
    render(
        <RouterProvider router={router}>
            <Navbar />
        </RouterProvider>
    )

    expect(screen.getByRole('link', {name: /home/i}))
    expect(screen.getByRole('link', {name: /shop/i}))
    expect(screen.getByRole('link', {name: /cart/i}))
})

it('goes to shop after click', async () => {
    render(
        <RouterProvider router={router}>
            <Navbar />
        </RouterProvider>
    )
    const user = userEvent.setup()
    const shopLink = screen.getByRole('link', {name: /shop/i})
    await user.click(shopLink)
    
    expect(screen.getByRole('heading', {name: /items/i}))
})

it('goes to cart after click', async () => {
    render(
        <RouterProvider router={router}>
            <Navbar />
        </RouterProvider>
    )
    const user = userEvent.setup()
    const cartLink = screen.getByRole('link', {name: /cart/i})
    await user.click(cartLink)
    
    expect(screen.getByRole('heading', {name: /cart/i}))
})

it('goes to home after click', async () => {
    render(
        <RouterProvider router={router}>
            <Navbar />
        </RouterProvider>
    )
    const user = userEvent.setup()
    const shopLink = screen.getByRole('link', {name: /shop/i})
    const homeLink = screen.getByRole('link', {name: /home/i})
    await user.click(shopLink)
    await user.click(homeLink)
    
    expect(screen.getByRole('heading', {name: /welcome/i}))
})