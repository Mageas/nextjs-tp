import { createClient } from "@/prismicio";
import RichText from "@/components/ui/RichText";

export default async function Cgu() {
  const client = createClient();
  const cgu = await client.getSingle('cgu');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Conditions d&apos;Utilisation</h1>
      <RichText field={cgu.data.cgu} />
    </div>
  );
}
