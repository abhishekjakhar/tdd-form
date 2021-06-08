import App from "./App";
import { render } from "@testing-library/react";

test("renders App", () => {
  const { getByText } = render(<App />);
  getByText(/home page/i);
});
