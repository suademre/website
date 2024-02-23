import { createContext, useContext, useState } from "react";

type SideBarMenuContextType = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenuHandler: () => void;
};

type SideBarMenuProviderType = {
  children: React.ReactNode;
};

const defaultSideBarMenuContext: SideBarMenuContextType = {
  showMenu: false,
  setShowMenu: () => {},
  toggleMenuHandler: () => {},
};

const SideBarMenuContext = createContext<SideBarMenuContextType>(
  defaultSideBarMenuContext
);

const useSideBarMenuContext = () => {
  return useContext(SideBarMenuContext);
};

const SideBarMenuProvider = ({ children }: SideBarMenuProviderType) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenuHandler = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <SideBarMenuContext.Provider
      value={{ showMenu, setShowMenu, toggleMenuHandler }}
    >
      {children}
    </SideBarMenuContext.Provider>
  );
};

export { SideBarMenuProvider, useSideBarMenuContext };
