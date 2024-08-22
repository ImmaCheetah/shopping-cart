import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopIntro from "../components/ShopIntro/ShopIntro";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

describe("Shop Intro", () => {
  const router = createMemoryRouter(routes);

  it("should render Start Buying button", () => {
    render(
      <RouterProvider router={router}>
        <ShopIntro />
      </RouterProvider>,
    );
    screen.debug();

    const button = screen.getByRole("button", { name: /start buying/i });

    expect(button).toBeInTheDocument();
  });

  it("should go to shop page when button clicked", async () => {
    render(
      <RouterProvider router={router}>
        <ShopIntro />
      </RouterProvider>,
    );

    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /start buying/i });

    await user.click(button);

    expect(screen.getByRole("heading", { name: /our products/i }));
  });
});
