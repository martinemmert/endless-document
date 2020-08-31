import React from "react";
// Also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line node/no-unpublished-import
import { Story, Meta } from "@storybook/react/types-6-0";
import { Editor } from "../Editor";

export default {
  title: "App / Editor",
  component: Editor,
  parameters: {},
} as Meta;

const Template: Story = (arguments_) => <Editor {...arguments_} />;

export const DefaultStory = Template.bind({});
