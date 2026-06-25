import ApplyForm from "@/components/forms/ApplyForm";
import RichText from "@/components/ui/RichText";
import { createClient } from "@/prismicio";
import getSlices from "@/utils/getSlices";
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
            <div className="flex flex-wrap gap-2 my-2">
                {job.tags.map((tag) => (
                    <Link key={tag} href={`/jobs/tags/${tag}`} className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        {tag}
                    </Link>
                ))}
            </div>
            <RichText field={job.data?.description} />
            {getSlices(job).map((slice) => (
                <div key={slice.title} className="bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-800 mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{slice.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{slice.description}</p>
                </div>
            ))}
            <ApplyForm job={job} />
        </div>
    );
}
