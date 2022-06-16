import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
    it("No alert on initial load", () => {
        const { queryByText } = render(<Counter />);
        expect(queryByText("Max Range Reached")).toBeNull();
    });

    describe("Incrementing is allowed", () => {
        it("Update the Count value", async () => {
            const { getByTestId, getByText } = render(<Counter max={2} />);
            const button = getByText("Increment");
            fireEvent.click(button);
            expect(getByTestId("count-value").innerHTML).toEqual("1");
        });
    });
})