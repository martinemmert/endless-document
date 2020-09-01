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

  it("should delete a bullet point if it is currently edited, the content is empty and backspace is pressed", async () => {
    const screen = render(<Editor />);
    act(() => { userEvent.click(screen.getByText("Add")) });
    const input1 = await screen.findByTestId("new-document-node-input");
    await act(() => userEvent.type(input1, "Do{backspace}{backspace}"));
    expect(input1).toBeInTheDocument();
    await act(() => userEvent.type(input1, "{backspace}"));
    expect(input1).not.toBeInTheDocument();
    act(() => { userEvent.click(screen.getByText("Add")) });
    // part 2
    const input2 = await screen.findByTestId("new-document-node-input");
    await act(() => userEvent.type(input2, "Do"));
    expect(input2).toBeInTheDocument();
    userEvent.click(screen.baseElement);
    const bullet = await screen.findByText("Do");
    expect(bullet).toBeInTheDocument();
    userEvent.click(bullet);
    const input3 = await screen.findByTestId("new-document-node-input");
    await act(() => userEvent.type(input3, "{backspace}{backspace}{backspace}"));
    expect(input3).not.toBeInTheDocument();
    expect(() => {
      screen.getByText("Do");
    }).toThrow();
  });
})