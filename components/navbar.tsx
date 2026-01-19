"use client";

import { useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import clsx from "clsx";
import { HiMenu, HiX } from "react-icons/hi";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      className="bg-white dark:bg-[#262420] shadow-md transition-colors duration-300 sticky top-0 z-50"
      maxWidth="xl"
      position="sticky"
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
                className={clsx(
                  "hover:text-[#187A34] transition-colors duration-200",
                  "text-foreground text-lg font-semibold",
                  "data-[active=true]:text-[#e9a749] data-[active=true]:font-bold"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="flex lg:hidden basis-1/5 sm:basis-full"
        justify="end"
      >
        <button
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e9a749]"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? (
            <HiX className="w-8 h-8 text-black dark:text-white" />
          ) : (
            <HiMenu className="w-8 h-8 text-black dark:text-white" />
          )}
        </button>
      </NavbarContent>

     {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#262420] shadow-md z-10">
          <ul className="flex flex-col gap-4 p-4">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  className="block hover:text-[#e9a749] transition-colors duration-200 text-black text-lg font-semibold"
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </HeroUINavbar>
  );
};
