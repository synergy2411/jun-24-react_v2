import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Output from "./Output";

describe("Output Component", () => {
  beforeEach(() => {});
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  test("renders heading element", () => {
    render(<Output />);

    const headingEl = screen.getByText("output component in action", {
      exact: false,
    });

    expect(headingEl).toBeInTheDocument();
  });

  test("renders the paragraph element", () => {
    render(<Output />);
    const paragraphEl = screen.queryByText("We will test this paragraph");
    expect(paragraphEl).not.toBeNull();
  });

  test("renders 'Toggle is true' when button is clicked", async () => {
    render(<Output />);

    const btnElement = screen.getByText("Toggle");
    userEvent.click(btnElement);

    const paragraphEl = await screen.findByText("Toggle is true");

    expect(paragraphEl).toBeInTheDocument();
  });

  test("renders not 'Toggle is false' when button is clicked", async () => {
    render(<Output />);

    const btnElement = screen.getByText("Toggle");
    userEvent.click(btnElement);

    const paragraphEl = await screen.findByText("Toggle is false");

    expect(paragraphEl).not.toBeInTheDocument();
  });

  test("renders list of posts after fetching data from API", async () => {
    render(<Output />);

    const lists = await screen.findAllByRole("listitem");

    //   expect(lists.length).not.toEqual(0);
    expect(lists.length).toEqual(100);
  });
});
