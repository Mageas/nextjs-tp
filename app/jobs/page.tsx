import ListJobs from "@/components/layouts/ListJobs";
import ClickableTag from "@/components/ui/ClickableTag";
import { createClient } from "@/prismicio";

export default async function Jobs() {
  const client = createClient();
  const tags = await client.getTags();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Offres d&apos;emploi</h1>
      <div>
        {tags.map((tag) => (
          <ClickableTag key={tag} name={tag} url={`/jobs/tags/${tag}`} />
        ))}
      </div>
      <ListJobs />
    </div>
  );
}