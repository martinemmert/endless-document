import React from "react";
// Also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line node/no-unpublished-import
import { Story, Meta } from "@storybook/react/types-6-0";
import { Logo } from "./Logo";

export default {
  title: "UI Elements / Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story = (arguments_) => <Logo {...arguments_} />;

export const LogoStory = Template.bind({});
