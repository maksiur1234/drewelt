import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { TwitterIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-white dark:bg-[#262420] shadow-md transition-colors duration-300"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-6 ml-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                href={item.href}
                className={clsx(
                  "hover:text-[#e9a749] transition-colors duration-200",
                  "text-foreground",
                  "data-[active=true]:text-[#e9a749] data-[active=true]:font-medium"
                )}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
      </NavbarContent>
    </HeroUINavbar>
  );
};
