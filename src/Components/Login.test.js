import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { storeConfig } from "../storeConfig";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./Login";
import { handleInitialData } from "../Actions/shared";

describe("Login", () => {
  it("Should render the login component", () => {
    const componentLogin = render(
      <Provider store={storeConfig}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(componentLogin).toBeDefined();
    expect(componentLogin).toMatchSnapshot();
  });

  it("Should set empty text when input wrong password", () => {
    const componentLogin = render(
      <Provider store={storeConfig}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const loginHeader = componentLogin.getByTestId("login-header");
    const usernameLabel = componentLogin.getByTestId("userName-label");
    const usernameInput = componentLogin.getByTestId("username-input");
    const passwordLabel = componentLogin.getByTestId("password-label");
    const passwordInput = componentLogin.getByTestId("password-input");
    const loginBtn = componentLogin.getByTestId("login-btn");

    expect(loginHeader).toBeInTheDocument();
    expect(usernameLabel).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: "sarahedo" } });
    fireEvent.change(passwordInput, { target: { value: "testwrongpassword" } });
    expect(usernameInput.value).toBe("sarahedo");
    expect(passwordInput.value).toBe("testwrongpassword");
    fireEvent.click(loginBtn);
    expect(loginHeader).toBeInTheDocument();
    expect(usernameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });
});
