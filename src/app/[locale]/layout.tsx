import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navigation, type Route } from "@/components/app-layout/Navigation";
import { Footer } from "@/components/app-layout/Footer";
import type { Locale } from "@/i18n/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netlify Connect Demo | Next.js",
  description:
    "Demo project that shows the usage of Netlify Connect with FirstSpirit integration in a Next.js project",
};

export const revalidate = 300;

const navigationRoutes: Route[] = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
];

const footerLinks: Route[] = [
  { label: "News", href: "/news" },
  { label: "Produkte", href: "/" },
  { label: "Legal", href: "/" },
];

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) => {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navigation routes={navigationRoutes} />
          {children}
          <Footer
            copyrightText="© Copyright. All Rights Reserved by SmartLiving."
            legalLinks={footerLinks}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
