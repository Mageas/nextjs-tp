import Link from "next/link.js";
import ClickableTag from "./ClickableTag";
import Pin from "./Pin";
import { JobDocument } from "@/prismicio-types.js";
import { asText } from "@prismicio/client";

export default function JobCard({ job }: { job: JobDocument }) {
  return (
      <div className="flex flex-col justify-center w-full h-full p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex justify-between items-center w-full">
        <Link href={`/jobs/${job.data?.titre?.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
            {job.data?.titre ?? ""}
        </Link>
        <Pin job={job} />
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{job.last_publication_date ?? ""}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {job.tags.map((tech) => (
          <ClickableTag key={tech} name={tech} url={`/jobs/tags/${tech}`} />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300">{asText(job.data?.description) ?? ""}</p>
    </div>
  );
}