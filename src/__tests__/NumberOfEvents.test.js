// src/__tests__/NumberOfEvents.test.js

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });
    test("renders text input", () => {
        expect(NumberOfEventsComponent.queryByPlaceholderText("Enter number of events")).toBeInTheDocument();
    })
    test("renders input field correctly", () => {
        const input = NumberOfEventsComponent.queryByPlaceholderText("Enter number of events");
        expect(input).toBeInTheDocument();
        expect(input.placeholder).toBe("Enter number of events");
        expect(input.type).toBe("number");
        expect(input.min).toBe("1");
        expect(input.max).toBe("32");
    })

    test("changes value when number is entered", async () => {
        const input = NumberOfEventsComponent.queryByPlaceholderText("Enter number of events");
        await userEvent.type(input, '{backspace}{backspace}10');
        expect(input.value).toBe('10');
    })
})