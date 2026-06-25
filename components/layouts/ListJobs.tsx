import { fetchPrismaticJobs } from "@/actions/fetchPrismaticJobs";
import JobCard from "../ui/JobCard";

export default async function ListJobs({ limit = 0, ids = [] }: { limit?: number; ids?: string[] }) {
    const jobs = await fetchPrismaticJobs(limit, ids);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {jobs.map((job) => (
                <JobCard
                    key={job.id}
                    job={job}
                />
            ))}
        </div>
    );
}
