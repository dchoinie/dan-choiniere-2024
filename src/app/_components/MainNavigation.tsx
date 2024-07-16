import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { type NavItem } from "./NavItem";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
import { Github, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { githubUrl, xUrl, linkedinUrl } from "../_constants";

const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const MainNavigation = (): JSX.Element => {
  return (
    <div className="flex justify-between p-8">
      <NavigationMenu>
        <NavigationMenuList className="gap-12">
          {navItems.map((navItem: NavItem, i: number) => (
            <NavigationMenuItem key={`${i} - ${navItem.name}`}>
              <Link href={navItem.link} className="text-white">
                {navItem.name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="relative z-50 flex items-center gap-12">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Github size={24} className="text-white" />
        </a>
        <a href={xUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/x-logo-white.png"
            width={24}
            height={24}
            className="self-center"
            alt="X Logo"
          />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <LinkedinIcon size={24} className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default MainNavigation;
