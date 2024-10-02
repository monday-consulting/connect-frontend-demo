import { Teaser } from "../section/Teaser";
import { FAQSection } from "../section/FAQSection";
import type { FirstSpiritSection } from "@/gql/generated/graphql";
import { Stage } from "../section/Stage";
import { Features } from "../section/Features";

export type SectionProps = {
  section: Pick<FirstSpiritSection, "__typename" | "id" | "sectionType" | "data">;
};

const Section = ({ section }: SectionProps) => {
  const SectionComponent = () => {
    switch (section.sectionType) {
      case "accordion":
        return (
          <FAQSection
            headline={section.data.st_headline}
            subline={section.data.st_subline}
            entries={section.data.st_accordion.map(
              // biome-ignore lint/suspicious/noExplicitAny: No type definitions
              (entry: any) => ({
                title: entry.data.st_title,
                content: { content: entry.data.st_content },
              })
            )}
          />
        );
      case "stage":
        return (
          <Stage
            headline={section.data.st_headline}
            subline={section.data.st_subheadline}
            image={{
              src: section.data.st_image.resolutions.ORIGINAL.url,
              alt: section.data.st_image_alt_text,
            }}
            cta={{
              label: section.data.st_cta?.data.lt_text,
              // TODO: resolve section.data.st_cta?.data.lt_link
              href: "#",
            }}
          />
        );
      case "features":
        return (
          <Features
            headline={section.data.st_headline}
            text={{ content: section.data.st_text }}
            features={section.data.st_features.map(
              // biome-ignore lint/suspicious/noExplicitAny: No type definitions
              (feature: any) => ({
                link: {
                  // TODO: reslove feature.data.st_link.data.lt_link
                  href: "#",
                  label: feature.data.st_link.data.lt_text,
                },
                image: {
                  src: feature.data.st_image.resolutions.ORIGINAL.url,
                  alt: feature.data.st_image_alt_text,
                },
                title: feature.data.st_title,
                text: { content: feature.data.st_text },
                id: feature.id,
              })
            )}
          />
        );
      case "teaser":
        return (
          <Teaser
            headline={section.data.st_headline}
            claim={section.data.st_subhealine}
            text={{ content: section.data.st_text }}
            imageStart={section.data.st_layout.key === "text-image"}
            image={{
              src: section.data.st_image.resolutions.ORIGINAL.url,
              alt: section.data.st_image_alt_text,
            }}
            cta={
              section.data.st_cta && {
                label: section.data.st_cta.data.lt_text,
                // TODO: resolve section.data.st_cta.data.lt_link
                href: "#",
              }
            }
          />
        );
      case "featured_products":
        return "SectionFeaturedProducts";
      default:
        return undefined;
    }
  };

  return <section>{<SectionComponent />}</section>;
};

export { Section };
