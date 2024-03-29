// src/__tests__/NumberOfEvents.test.js

import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  const mockSetCurrentNOE = jest.fn(); // Create a mock function
  beforeEach(() => {
    mockSetCurrentNOE.mockClear(); // Reset the mock function
    NumberOfEventsComponent = render(
      <NumberOfEvents
        setCurrentNOE={mockSetCurrentNOE}
        currentNOE={10}
        setErrorAlert={() => {}}
      />
    );
  });
  test("renders text input", () => {
    expect(
      NumberOfEventsComponent.queryByRole("spinbutton")
    ).toBeInTheDocument();
  });
  test("renders input field correctly", () => {
    const input = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe("Enter number of events");
    expect(input.type).toBe("number");
    expect(input.min).toBe("0");
    expect(input.max).toBe("32");
  });

  test("changes value when number is entered", async () => {
    let input = NumberOfEventsComponent.queryByRole("spinbutton");
    await userEvent.clear(input);
    await userEvent.type(input, "10");
    expect(input.value).toBe("10");
  });

  test("handles value outside of range", async () => {
    let input = NumberOfEventsComponent.queryByRole("spinbutton");
    await userEvent.type(input, "100");
    expect(input.value).toBe("10");
    expect(mockSetCurrentNOE).not.toHaveBeenCalled();
  });
  test("calls setCurrentNOE when number is entered", async () => {
    const input = NumberOfEventsComponent.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "15" } });
    await waitFor(() => expect(mockSetCurrentNOE).toHaveBeenCalledTimes(1));
    expect(mockSetCurrentNOE).toHaveBeenCalledWith(15);
  });

  test("does not update state with invalid input", async () => {
    let input = NumberOfEventsComponent.getByRole("spinbutton");
    await userEvent.type(input, "{selectall}abc");
    expect(mockSetCurrentNOE).not.toHaveBeenCalled();
  });

  test("initializes `numberOfEvents` state with `currentNOE` prop", () => {
    const input = NumberOfEventsComponent.getByRole("spinbutton");
    expect(input.value).toBe("10");
  });

  // test("handles invalid input correctly", async () => {
  //   const input = NumberOfEventsComponent.getByRole("spinbutton");
  //   fireEvent.change(input, { target: { value: '0' } });
  //   expect(mockSetCurrentNOE).not.toHaveBeenCalled();
  // });

  // test("does not update state with empty input", async () => {
  //   let input = NumberOfEventsComponent.getByRole("spinbutton");
  //   await userEvent.clear(input);
  //   expect(mockSetCurrentNOE).not.toHaveBeenCalled();
  // });

  test("does not update state with input greater than 32", async () => {
    let input = NumberOfEventsComponent.getByRole("spinbutton");
    await userEvent.type(input, "33");
    expect(mockSetCurrentNOE).not.toHaveBeenCalled();
  });
});
