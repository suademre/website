import { Meta, Story } from "@storybook/react";
import Icon, { IIcon, icons } from ".";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {},
} as Meta;

const Template: Story<IIcon> = (args) => <Icon {...args} />;

const IconSetTemplate: Story<IIcon> = (args) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {Object.keys(icons).map((key: string) => {
      const iconKey = key as keyof typeof icons;
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "15px",
          }}
          key={key}
        >
          <Icon name={iconKey} />
          <p>{key}</p>
        </div>
      );
    })}
  </div>
);

export const Default = Template.bind({});
export const Background = Template.bind({});
export const WithColor = Template.bind({});
export const IconSet = IconSetTemplate.bind({});

Default.args = { name: "menu" };
Background.args = {
  name: "menu",
  bgColor: "blue",
  padding: "18px",
  color: "orange",
};
WithColor.args = {
  name: "buy",
  color: "orange",
};
