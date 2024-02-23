import { Meta, Story } from "@storybook/react";
import Card, { ICard } from ".";

export default {
  title: "Components/Molekuls/Card",
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<ICard> = (args) => (
  <div style={{ width: "340px" }}>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  imageFrond:
    "https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000",
  title: "Flying Low",
  price: 105,
};
