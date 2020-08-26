import React from "react";
import { Editor } from "../Editor";
import { render, cleanup, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("As a user, I want to write down my thoughts in a bullet list so that I can see them all in one place", () => {

  afterEach(cleanup);

  it("should provide me an empty editor when I use the app for the first time", async () => {
    const screen = render(<Editor />);
    const nodes = screen.queryAllByTestId("document-node");
    expect(nodes).toHaveLength(0);
  });

  it("should, by clicking a button, add a bullet point to the current document, enter its edit mode and focus on it", async () => {
    const screen = render(<Editor />);
    const button = screen.getByText("Add");
    // Step 1: Click the add button
    act(() => { userEvent.click(button) });
    const newDocumentNode = screen.getByTestId("new-document-node");
    const newDocumentNodeInput = screen.getByTestId("new-document-node-input");
    expect(newDocumentNode).toBeInTheDocument();
    expect(newDocumentNodeInput).toBeInTheDocument();
    expect(newDocumentNodeInput).toHaveFocus();
    await act(() => userEvent.type(newDocumentNodeInput, "Do what you love!"));
    // Step 2: Click the add button again
    act(() => { userEvent.click(button) });
    const previousDocumentNode = screen.getByText("Do what you love!");
    const nextDocumentNode = screen.getByTestId("new-document-node");
    const nextDocumentNodeInput = screen.getByTestId("new-document-node-input");
    // The thext of the previous generated bullet point should be rendered not through an input field
    expect(previousDocumentNode).toBeInTheDocument();
    expect(previousDocumentNode).not.toBeInstanceOf(HTMLInputElement);
    // The previous generated elements should not be in de DOM anymore
    expect(newDocumentNode).not.toBeInTheDocument();
    expect(newDocumentNodeInput).not.toBeInTheDocument();
    expect(nextDocumentNode).toBeInTheDocument();
    expect(nextDocumentNodeInput).toBeInTheDocument();
    expect(nextDocumentNodeInput).toHaveFocus();
  });

  it.todo("should, by pressing enter, stop the edit mode of the current edited bullet point, create a new one and enter its edit mode and focus on it")
  it.todo("should, by pressing escape or blur the current node, stop its edit mode");
  it.todo("should give each bullet point an unique id upon creation");
});