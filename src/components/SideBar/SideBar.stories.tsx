import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import SideBar from ".";
import { ISideBar } from "./types";
import Icon from "../Icon";

export default {
  title: "Components/SideBar",
  component: SideBar,
} as Meta;

// Hikaye için kullanılacak ara bileşeni tanımlayın
const SideBarWithState = (props: ISideBar) => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Icon name="menu" onClick={toggleMenuHandler} color="orange" />
      <SideBar
        {...props}
        showMenu={showMenu}
        toggleMenuHandler={toggleMenuHandler}
      >
        {props.children}
      </SideBar>
    </>
  );
};

// Hikayenin şablonunu tanımlayın
const Template: Story<ISideBar> = (args) => (
  <SideBarWithState {...args}>SideBar</SideBarWithState>
);

// Hikaye varyasyonlarını tanımlayın
export const Default = Template.bind({});
Default.args = {
  // Buraya varsayılan prop değerlerini ekleyin
};
