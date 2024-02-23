// import type { Meta, StoryObj } from "@storybook/react";
// import Button, { IButton } from ".";

// export default {
//   title: "coponents/Button",
//   component: Button,
//   argTypes: {},
// } as Meta<typeof Button>;

// const Template: StoryObj<typeof Button> = (args: IButton) => (
//   <Button {...args} />
// );

// import React from "react";
// import { StoryObj, Meta } from "@storybook/react";
// import Button, { IButton } from ".";

// export default {
//   title: "Components/Button",
//   component: Button,
//   argTypes: {
//     theme: {
//       control: {
//         type: "select",
//         options: ["primary", "secondary", "danger", "warning"],
//       },
//     },
//     onClick: { action: "clicked" },
//   },
// } satisfies Meta;

// const Template: StoryObj<IButton> = (args:IButton) => <Button {...args}>Button</Button>;

// export const Primary = Template.bind({});
// Primary.args = {
//   theme: "primary",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   theme: "secondary",
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   theme: "danger",
// };

// export const Warning = Template.bind({});
// Warning.args = {
//   theme: "warning",
// };

import { Story, Meta } from "@storybook/react";
import Button, { IButton } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  theme: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  theme: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  theme: "warning",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  theme: "primary",
  iconName: "close",
};
