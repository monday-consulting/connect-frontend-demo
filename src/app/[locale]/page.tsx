import { Home } from "@/components/page-layout/Home";
import { getPageContentByRoute } from "@/gql/documents/pageContent";
import type { FirstSpiritPageBody } from "@/gql/generated/graphql";
import { defaultLocale, type Locale } from "@/i18n/config";

const SlugPage = async ({ params }: { params: { locale: Locale } }) => {
  const path = params.locale === defaultLocale ? "/homepage/" : "/startseite/";

  const page = await getPageContentByRoute(params.locale, decodeURI(path));
  const pageBodies = page?.pageBodies?.map((body) => body) as FirstSpiritPageBody[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-12 md:px-24">
      <Home pageBodies={pageBodies} />
    </main>
  );
};

export default SlugPage;
