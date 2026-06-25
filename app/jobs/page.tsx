import ListJobs from "@/components/layouts/ListJobs";
import { createClient } from "@/prismicio";

export default async function Jobs() {
  const client = createClient();
  const tags = await client.getTags();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Offres d&apos;emploi</h1>
      <div>
        {tags.map((tag) => (
          <span key={tag} className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      <ListJobs />
    </div>
  );
}