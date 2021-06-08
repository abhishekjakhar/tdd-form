import * as React from "react";

import { login } from "../../api/api";

export default function LoginForm() {
  const [isSaving, setIsSaving] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSaving(true);
    const { username, password } = e.target.elements;
    login({
      username: username.value,
      password: password.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-field">Username</label>
        <input type="text" id="username-field" name="username" />
      </div>
      <div>
        <label htmlFor="password-field">Password</label>
        <input type="password" id="password-field" name="password" />
      </div>
      <div>
        <button type="submit" disabled={isSaving}>
          Submit
        </button>
      </div>
    </form>
  );
}
