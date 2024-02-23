import { Meta, Story } from "@storybook/react";
import Image from ".";
import { IImage } from "./types";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {},
} as Meta;

const Template: Story<IImage> = (args) => (
  <div style={{ width: "250px" }}>
    <Image {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  src: "https://www.kaft.com/static/images/cache/800/tisort_flyinglow_19186_800_800.jpg?cacheID=1629358586000",
  alt: "image",
  width: "100%",
};
