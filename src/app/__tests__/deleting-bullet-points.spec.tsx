import { act, cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Editor } from "../Editor";


describe("As a user, I want to delete any of my written down bullet points so that I can keep only what is meaningful to me.", () => {
  afterEach(cleanup);
  it("should delete a bullet point by clicking its delete button", async () => {
    const screen = render(<Editor />);
    act(() => { userEvent.click(screen.getByText("Add")) });
    const input = await screen.findByTestId("new-document-node-input");
    await act(() => userEvent.type(input, "Do what you love!"));
    // The delete button should not be visible on a bullet point that is currently edited
    expect(() => { screen.getByText("delete") }).toThrow();
    userEvent.click(screen.baseElement);
    const bullet = await screen.findByText("Do what you love!");
    expect(bullet).toBeInTheDocument();
    const button = screen.getByText("delete");
    expect(button).toBeInTheDocument();
    expect(button).toBeInstanceOf(HTMLButtonElement);
    act(() => { userEvent.click(button) });
    expect(button).not.toBeInTheDocument();
    expect(() => {
      return screen.getByText("Do what you love!");
    }).toThrow();
  });
})