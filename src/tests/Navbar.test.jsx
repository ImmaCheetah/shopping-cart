import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import routes from "../routes";

const router = createMemoryRouter(routes);
it("shows all nav buttons", () => {
  render(
    <RouterProvider router={router}>
      <Navbar />
    </RouterProvider>,
  );

  expect(screen.getByTestId('homeLink'));
  expect(screen.getByTestId('shopLink'));
  expect(screen.getByTestId('cartLink'));
});

it("goes to shop after click", async () => {
  render(
    <RouterProvider router={router}>
      <Navbar />
    </RouterProvider>,
  );
  const user = userEvent.setup();
  const shopLink = screen.getByTestId('shopLink');
  await user.click(shopLink);

  expect(screen.getByRole("heading", { name: /our products/i }));
});

it("goes to cart after click", async () => {
  render(
    <RouterProvider router={router}>
      <Navbar />
    </RouterProvider>,
  );
  const user = userEvent.setup();
  const cartLink = screen.getByTestId('cartLink');
  await user.click(cartLink);

  expect(screen.getByRole("heading", { name: /cart/i }));
});

it("goes to home after click", async () => {
  render(
    <RouterProvider router={router}>
      <Navbar />
    </RouterProvider>,
  );
  const user = userEvent.setup();
  const shopLink = screen.getByTestId('shopLink');
  const homeLink = screen.getByTestId('homeLink');
  await user.click(shopLink);
  await user.click(homeLink);

  expect(screen.getByRole("heading", { name: /welcome/i }));
});
