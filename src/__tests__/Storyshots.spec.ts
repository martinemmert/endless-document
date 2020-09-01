import path from "path";
import React from "react";
import ReactDOM from "react-dom";
import initStoryshots, { multiSnapshotWithOptions } from "@storybook/addon-storyshots";

const configPath = path.resolve(__dirname, "..", "..", ".storybook");

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element) => {
    return element as React.ReactPortal;
  })
})

initStoryshots({
  configPath,
  framework: "react",
  test: multiSnapshotWithOptions({}),
});
