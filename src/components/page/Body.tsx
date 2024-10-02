import { Section } from "../page-body-count/Section";
import type { FirstSpiritPageBody, FirstSpiritPageBodyContent } from "@/gql/generated/graphql";

export type BodyProps = {
  content?: FirstSpiritPageBody[];
};

const Body = ({ content }: BodyProps) => {
  const getComponentFromPageBody = (pageBodyContent: FirstSpiritPageBodyContent) => {
    if (pageBodyContent.__typename === "FirstSpiritSection") {
      return <Section section={pageBodyContent} />;
    }
    return null;
  };

  return (
    <>
      {content?.map((pageBodyContent) => (
        <div key={pageBodyContent.previewId}>
          {pageBodyContent.children?.map((item, index) => (
            <div key={index}>{getComponentFromPageBody(item)}</div>
          ))}
        </div>
      ))}
    </>
  );
};

export { Body };
