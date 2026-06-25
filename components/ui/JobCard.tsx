import Link from "next/link.js";
import ClickableTag from "./ClickableTag";

export type JobCardProps = {
  title: string;
  bookmarked: boolean;
  datePosted: string;
  technologies: string[];
  description: string;
};

export default function JobCard({ title, bookmarked, datePosted, technologies, description }: JobCardProps) {
  return (
    <Link href={`/jobs/${title.toLowerCase().replace(/\s+/g, "-")}`} className="">
      <div className="flex flex-col justify-center w-full h-full p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex space-between items-center w-full">
        {title}
        <span className={`ml-auto ${bookmarked ? "text-yellow-500" : "text-gray-400"}`}>
          {bookmarked ? "Bookmarked" : "Not Bookmarked"}
        </span>
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{datePosted}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {technologies.map((tech) => (
          <ClickableTag key={tech} name={tech} url={`/jobs/tags/${tech}`} />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
    </Link>
  );
}