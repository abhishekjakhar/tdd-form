import * as React from "react";

import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { login as mockLogin } from "../../api/api";
import LoginForm from "./login-form";
import faker from "faker";

jest.mock("../../api/api.js");

afterEach(() => {
  jest.clearAllMocks();
});

function buildLoginForm() {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
  };
}

test("render a form with username, password and submit button", () => {
  mockLogin.mockResolvedValueOnce();
  const { getByLabelText, getByRole } = render(<LoginForm />);
  const { username, password } = buildLoginForm();
  userEvent.type(getByLabelText(/username/i), username);
  userEvent.type(getByLabelText(/password/i), password);
  const submitButton = getByRole("button", { name: /submit/i });

  fireEvent.click(submitButton);

  expect(submitButton).toBeDisabled();

  expect(mockLogin).toHaveBeenCalledWith({ username, password });
  expect(mockLogin).toHaveBeenCalledTimes(1);
});
