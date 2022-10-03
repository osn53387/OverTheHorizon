import { render, screen } from "@testing-library/react";
import OverTheHorizion from "../OverTheHorizon";

test("renders learn react link", () => {
  render(<OverTheHorizion />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
