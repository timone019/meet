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
        expect(NumberOfEventsComponent.queryByRole("spinbutton")).toBeInTheDocument();
    })
    test("renders input field correctly", () => {
        const input = NumberOfEventsComponent.queryByRole("spinbutton");
        expect(input).toBeInTheDocument();
        expect(input.placeholder).toBe("Enter number of events");
        expect(input.type).toBe("number");
        expect(input.min).toBe("1");
        expect(input.max).toBe("32");
    })

    test("changes value when number is entered", async () => {
        let input = NumberOfEventsComponent.queryByRole("spinbutton");
        await userEvent.type(input, '{backspace}{backspace}10');
        input = NumberOfEventsComponent.queryByRole("spinbutton");
        expect(input.value).toBe('10');
    });

    test("handles value outside of range", async () => {
        let input = NumberOfEventsComponent.queryByRole("spinbutton");
        await userEvent.type(input, '{backspace}{backspace}100');
        input = NumberOfEventsComponent.queryByRole("spinbutton");
        expect(input.value).toBe('100'); // or whatever your expected behavior is
    });

})