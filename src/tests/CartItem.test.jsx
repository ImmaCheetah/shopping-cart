import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { createMemoryRouter, RouterProvider, useOutletContext } from "react-router-dom";
import routes from "../routes";
import CartItem from "../components/CartItem/CartItem";
import RenderRouteWithOutletContext from "../RenderRouterWithOutletContext";

const mockOutletContextData = [
  {
    id: 1,
    title: 'shirt',
    price: 10,
    productQty: 2
  }
]

it('adds 1 to quantity and changes price', async () => {
  // const { cart, setCart } = useOutletContext();
  userEvent.setup()
  // const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });
  //   await act(() => {
  //     render(<RouterProvider router={router} />);
  //   });
  render(
    <RenderRouteWithOutletContext context={mockOutletContextData}>
      <CartItem 
        title='Shirt'
        price={10}
        totalPrice={10}
        deleteItem={() => {}}
      />
    </ RenderRouteWithOutletContext>
  )
  screen.debug()
})