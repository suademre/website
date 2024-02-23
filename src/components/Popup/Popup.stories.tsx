import { Meta, Story } from "@storybook/react";
import Popup, { IPopup } from ".";

export default {
  title: " Components/Popup",
  component: Popup,
  argTypes: {},
} as Meta;

const Template: Story<IPopup> = (args) => <Popup {...args}>Popup</Popup>;

export const Default = Template.bind({});
