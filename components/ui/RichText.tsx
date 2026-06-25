import { RichTextField } from "@prismicio/client";
import { RichTextComponents, PrismicRichText } from "@prismicio/react";

export const richTextComponents: RichTextComponents = {
  heading1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
  heading2: ({ children }) => <h2 className="text-xl font-bold mb-4">{children}</h2>,
  heading3: ({ children }) => <h3 className="text-lg font-bold mb-4">{children}</h3>,
  heading4: ({ children }) => <h4 className="text-md font-bold mb-4">{children}</h4>,
  heading5: ({ children }) => <h5 className="text-sm font-bold mb-4">{children}</h5>,
  heading6: ({ children }) => <h6 className="text-xs font-bold mb-4">{children}</h6>,
  paragraph: ({ children }) => <p className="my-8">{children}</p>,
  preformatted: ({ children }) => <pre className="my-8">{children}</pre>,
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  listItem: ({ children }) => <li className="list-disc ml-8">{children}</li>,
  oListItem: ({ children }) => <li className="list-decimal ml-8">{children}</li>,
  list: ({ children }) => <ul className="my-8">{children}</ul>,
  oList: ({ children }) => <ol className="my-8">{children}</ol>,
};

export default function RichText({ field }: { field: RichTextField }) {
  return <PrismicRichText field={field} components={richTextComponents} />;
}
