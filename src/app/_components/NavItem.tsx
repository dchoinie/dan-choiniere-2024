import React from "react";

export interface NavItem {
  name: string;
  link: string;
}

const NavItem = ({ name, link }: NavItem): JSX.Element => {
  return <div>NavItem</div>;
};

export default NavItem;
