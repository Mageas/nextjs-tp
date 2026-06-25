import { fetchPrismaticJobs } from "@/actions/fetchPrismaticJobs";

export async function GET(request: Request) {
    const fetchedJobs = await fetchPrismaticJobs(3);

    const jobs = fetchedJobs.map((job) => ({
        uid: job.uid,
        title: job.data.titre,
        description: job.data.description,
        tags: job.tags.join(', '),
        date: new Date(job.last_publication_date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
    }));

  return new Response(JSON.stringify(jobs), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
