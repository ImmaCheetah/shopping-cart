import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import {RouterProvider, createMemoryRouter} from 'react-router-dom';
import routes from './routes';

global.fetch = vi.fn(() => {
  const data = { id: '1', title: 'shirt'}

  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
})

const router = createMemoryRouter(routes)

describe('fetching', () => {
  it('shows error message with failed fetch', async () => {
    global.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: 'A network error was encountered' });
    });

    render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>)
    screen.debug()
    const errorMsg = await screen.findByText('A network error was encountered')

   expect(errorMsg).toBeInTheDocument()

  })

  it('fetches correct data', async () => {
    render(
      <RouterProvider router={router}>
        <App />
      </RouterProvider>)
    const user = userEvent.setup()
    const shopLink = screen.getByRole('link', {name: /shop/i})

    await user.click(shopLink)
    const fetchData = await screen.findByText('shirt')

    expect(fetchData).toBeInTheDocument()
  })

})

describe('page navigation', () => {
  
  it('should go to shop', async () => {
    render(
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    )
    const user = userEvent.setup()

    const welcomeText = screen.getByRole('heading', {name: /Welcome/i})
    expect(welcomeText).toBeInTheDocument()

    await user.click(screen.getByRole('link', {name: /shop/i}))
    
    expect(screen.getByRole('heading', {name: /items/i})).toBeInTheDocument()
  })

  it('error page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/abc'],
    });
  
    render(
      <RouterProvider router={router} />
    );

    expect(screen.getByRole('heading', {name: /seems you got lost/i})).toBeInTheDocument()
  })
})