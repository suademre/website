import React from "react";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";

interface IImenu {
  title: string;
  data: { title: string; slug: string }[];
}

const Menu = ({ title, data }: IImenu) => {
  const location = useLocation();
  console.log("location.pathname: ", location.pathname);

  return (
    <div>
      <h2>{title}</h2>
      {data.map((category, index) => (
        <MenuItem
          key={index}
          title={category.title}
          slug={category.slug}
          isActive={location.pathname === `/categories/${category.slug}`}
        />
      ))}
    </div>
  );
};

export default Menu;
