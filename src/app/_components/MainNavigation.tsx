import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { type NavItem } from "./NavItem";
import Link from "next/link";
import { FileDownIcon, Github, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { githubUrl, xUrl, linkedinUrl } from "../_constants";
import clsx from "clsx";

interface MainNavigationProps {
  dark?: boolean;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Skills",
    link: "/skills",
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

const MainNavigation = ({ dark }: MainNavigationProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "relative z-50 mx-8 flex justify-between py-8",
        dark ? "text-white" : "text-slate-900",
      )}
    >
      <NavigationMenu>
        <NavigationMenuList className="gap-12">
          {navItems.map((navItem: NavItem, i: number) => (
            <NavigationMenuItem key={`${i} - ${navItem.name}`}>
              <Link href={navItem.link} className="text-inherit">
                {navItem.name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="relative z-50 flex items-center gap-12">
        {/* Resume */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="/documents/Dan_Choiniere_Resume.pdf"
                download
                target="_blank"
              >
                <FileDownIcon size={24} className="text-inherit" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download Resume</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* GitHub */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={24} className="text-inherit" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* X */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href={xUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src={dark ? "/images/x-logo-white.png" : "/images/x-logo.png"}
                  width={24}
                  height={24}
                  className="h-[24px] self-center"
                  alt="X Logo"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>X</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Linkedin */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={24} className="text-inherit" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Linkedin</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default MainNavigation;
