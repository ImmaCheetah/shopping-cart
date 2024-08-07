import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import {RouterProvider, createMemoryRouter} from 'react-router-dom';
import routes from './routes';

describe('page navigation', () => {
  const router = createMemoryRouter(routes)

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