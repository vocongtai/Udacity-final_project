import { render } from "@testing-library/react";
import App from "../src/Components/App";
import { Provider } from "react-redux";
import { storeConfig } from "./storeConfig";
import { BrowserRouter } from "react-router-dom";
import { setAuthedUser } from "./Actions/authedUser";

describe("App", () => {
  it("Shold render the App component", () => {
    const componentApp = render(
      <Provider store={storeConfig}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(componentApp).toBeDefined();
    expect(componentApp).toMatchSnapshot();
  });

  it("Shold show Login page when authedUser not set", () => {
    const componentApp = render(
      <Provider store={storeConfig}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const header = componentApp.getByTestId("login-header");
    expect(header).toBeInTheDocument();
  });

  it("Shold show dasboard page when loggin", () => {
    storeConfig.dispatch(setAuthedUser({ id:"", password: "" }));

    const componentApp = render(
      <Provider store={storeConfig}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    
    const header=componentApp.getByTestId("dashboard-header");
    expect(header).toBeInTheDocument();
  });
});
