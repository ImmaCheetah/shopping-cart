import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../routes";
import { act } from "react";

global.fetch = vi.fn(() => {
  const data = [{ id: "1", title: "shirt" }];

  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
});

describe("Quantity changes", () => {
  it("adds 1 to quantity", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    await act(() => {
      render(<RouterProvider router={router} />);
    });

    const user = userEvent.setup();
    const plusBtn = screen.getByRole("button", { name: "+" });
    const input = screen.getByLabelText(/qty/i);
    screen.debug();

    await user.click(plusBtn);

    expect(input.value).toBe("2");
  });

  it("does not go below 1", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    await act(() => {
      render(<RouterProvider router={router} />);
    });

    const user = userEvent.setup();
    const minusBtn = screen.getByRole("button", { name: "-" });
    const input = screen.getByLabelText(/qty/i);
    screen.debug();

    await user.click(minusBtn);

    expect(input.value).toBe("1");
  });

  it("changes cart number when item added", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    await act(() => {
      render(<RouterProvider router={router} />);
    });
    const user = userEvent.setup();
    const addBtn = screen.getByText("Add to Cart");
    const cartLink = screen.getByRole("link", { name: /cart/i });
    screen.debug();

    await user.click(addBtn);

    expect(cartLink.textContent).toBe("Cart 1");
  });
});
