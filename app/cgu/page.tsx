import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

export default async function Cgu() {
  const client = createClient();
  const cgu = await client.getSingle('cgu');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Conditions d'Utilisation</h1>
        <PrismicRichText
          field={cgu.data.cgu}
          components={{
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
          }}
        />;

    </div>
  );
}