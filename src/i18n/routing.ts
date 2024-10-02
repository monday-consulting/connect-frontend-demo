import { defineRouting, type Pathnames } from "next-intl/routing";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defaultLocale, locales } from "./config";

const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/news": "/news",
};

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: "always",
  pathnames: pathnames as typeof pathnames & Record<string & {}, string>,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation(routing);
