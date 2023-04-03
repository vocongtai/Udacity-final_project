import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { storeConfig } from "../storeConfig";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import { setAuthedUser } from "../Actions/authedUser";

describe("Nav", () => {
  it("Should render the component", () => {
    storeConfig.dispatch(setAuthedUser({ id: "sarahedo", password: "" }));

    const componetNav = render(
      <Provider store={storeConfig}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
    expect(componetNav).toBeDefined();
    expect(componetNav).toMatchSnapshot();
  });

  it("should display username at user login", () => {
    storeConfig.dispatch(setAuthedUser({ id: "sarahedo", password: "" }));

    const componetNav = render(
      <Provider store={storeConfig}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    const userInfoElement = componetNav.getByTestId("authedUser");
    expect(userInfoElement.textContent).toBe("sarahedo");
  });
});
