import ApplyForm from "@/components/forms/ApplyForm";
import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import Link from "next/link.js";
import { redirect } from "next/navigation";

type JobPagePropsType = {
  params: Promise<{ slug: string }>;
};

export default async function Job({ params }: JobPagePropsType) {
    const { slug } = await params;

    const client = createClient();
    const job = await client.getByUID("job", slug).catch(() => null);

    if (!job) redirect("/jobs");

    return (
        <div className="w-full">
            <Link href="/jobs" className="text-blue-500 hover:underline mb-4 inline-block">
                &larr; Retour aux offres d&apos;emploi
            </Link>
            <h1 className="text-2xl font-bold mb-4">{job.data?.titre}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{asText(job.data?.description)}</p>
            <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                    <Link key={tag} href={`/jobs/tags/${tag}`} className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        {tag}
                    </Link>
                ))}
            </div>
            <ApplyForm jobSlug={slug} />
        </div>
    );
}
