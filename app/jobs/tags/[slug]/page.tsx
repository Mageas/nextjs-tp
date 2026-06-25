import JobCard from "@/components/ui/JobCard";
import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import Link from "next/link.js";
import { redirect } from "next/navigation";


type TagPagePropsType = {
  params: Promise<{ slug: string }>;
};

export default async function WebsitePage({ params }: TagPagePropsType) {
    const { slug } = await params;

    const client = createClient();
    const jobs = await client.getAllByTag(slug).catch(() => null);

    if (!jobs || jobs.length === 0) redirect("/jobs");

    return (
        <div className="w-full">
            <Link href="/jobs" className="text-blue-500 hover:underline mb-4 inline-block">
                &larr; Retour aux offres d&apos;emploi
            </Link>
            <h1 className="text-2xl font-bold mb-4">Offres d&apos;emploi pour le tag : {slug}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {jobs.map((job) => (
                    <JobCard
                        key={job.id}
                        title={job.data?.titre ?? ""}
                        bookmarked={false}
                        datePosted={job.last_publication_date ?? ""}
                        technologies={job.tags}
                        description={asText(job.data?.description) ?? ""}
                    />
                ))}
            </div>
        </div>
    )
};