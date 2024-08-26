import { it, expect} from "vitest";
import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../routes";

localStorage.setItem("cart", JSON.stringify([
  {
    id: 1,
    title: 'shirt',
    price: 10,
    productQty: 2,
    totalPrice: 20,
    imgUrl: 'imageURL',
  }
]))

it('adds 1 to quantity and changes price', async () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });
  await act(() => {
    render(<RouterProvider router={router} />);
  });
  const user = userEvent.setup()
  const plusBtn = screen.getByRole("button", { name: "+" });
  const input = screen.getByTestId('qtyInput');
  const newPrice = screen.getByTestId('totalPrice');
  const newQty = screen.getByTestId('totalQty');
  
  await user.click(plusBtn)
  
  screen.debug()
  expect(input.value).toBe('3')
  expect(newPrice.textContent).toBe('$30.00')
  expect(newQty.textContent).toBe('Quantity: 3')
})

it('deletes item', async () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });
  await act(() => {
    render(<RouterProvider router={router} />);
  });
  const user = userEvent.setup()
  const itemTitle = screen.getByRole("heading", {name: /shirt/i})
  const delBtn = screen.getByRole("button", { name: 'Delete'});


  expect(itemTitle).toBeInTheDocument()
  await user.click(delBtn)
  expect(itemTitle).not.toBeInTheDocument()
})

