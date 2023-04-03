import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { storeConfig } from "../storeConfig";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import NewPoll from "./NewPoll";

describe("NewPoll", () => {
  it("Should be render the component", () => {
    const componentNewPoll = render(
      <Provider store={storeConfig}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );
    expect(componentNewPoll).toBeDefined();
    expect(componentNewPoll).toMatchSnapshot();
  });

  it("Should display all element new poll page", () => {
    const componentNewPoll = render(
      <Provider store={storeConfig}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );
    const firstOptionlable = componentNewPoll.getByTestId("firstOption-label");
    const firstOptoninput = componentNewPoll.getByTestId("firstOption-input");
    const secondOtionlable = componentNewPoll.getByTestId("secondOption-label");
    const secondOptioninput =
      componentNewPoll.getByTestId("secondOption-input");
    const submitButton = componentNewPoll.getByTestId("addQuestion-btn");

    expect(firstOptionlable.textContent).toBe("First Option: ");
    expect(secondOtionlable.textContent).toBe("Second Option: ");
    expect(submitButton.textContent).toBe("Submit");

    fireEvent.change(firstOptoninput, { target: { value: "question1" } });
    fireEvent.change(secondOptioninput, { target: { value: "question2" } });
    expect(firstOptoninput.value).toBe("question1");
    expect(secondOptioninput.value).toBe("question2");
  });
});
