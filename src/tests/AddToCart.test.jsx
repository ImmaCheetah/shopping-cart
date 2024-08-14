import { describe, it, expect, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
// import App from './App';
import AddToCart from '../components/AddToCart/AddToCart';
import routes from '../routes';


const router = createMemoryRouter(routes, {initialEntries: ['/shop']})

it('adds 1 to quantity', async () => {
    render(<RouterProvider router={router}/>
          
)

    const user = userEvent.setup()

    const plusBtn = screen.getByRole('button', {name: '+'})
})