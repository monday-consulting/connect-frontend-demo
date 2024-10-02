"use client";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { LuGlobe } from "react-icons/lu";
import type { Locale } from "@/i18n/config";
import { useParams } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/smart_living_logo.webp";

export type Route = {
  label: string;
  href: string;
};

export type NavigationProps = {
  routes: Route[];
};

const Navigation = ({ routes }: NavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLocaleSwitch = (newLocale: Locale) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: newLocale }
    );
  };

  return (
    <nav className="flex items-center justify-between p-10">
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="mb-4">
            <Image src={logo} alt="Logo" height={30} />
          </Link>
        </li>
        {routes.map((route) => (
          <li key={route.label}>
            <Link href={route.href} className="text-xl hover:underline">
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="group">
        <LuGlobe size={20} className="cursor-pointer group-hover:scale-110" />
        <div className="absolute right-6 z-40 hidden flex-col gap-2 rounded-xl bg-white p-8 shadow-lg group-hover:flex">
          <button
            type="button"
            className="hover:underline"
            onClick={() => handleLocaleSwitch("en_GB")}
          >
            English
          </button>
          <button
            type="button"
            className="hover:underline"
            onClick={() => handleLocaleSwitch("de_DE")}
          >
            Deutsch
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
