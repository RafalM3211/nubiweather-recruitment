import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

test("test1", () => {
  render(<Loader />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
