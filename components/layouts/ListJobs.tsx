import JobCard from "../ui/JobCard";

export default function ListJobs() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Nos dernières opportunités</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                <JobCard
                    title="Frontend Developer"
                    bookmarked={true}
                    datePosted="2024-06-01"
                    technologies={["React", "TypeScript", "Tailwind CSS"]}
                    description="We are looking for a skilled frontend developer to join our team."
                />
                <JobCard
                    title="Backend Developer"
                    bookmarked={false}
                    datePosted="2024-05-28"
                    technologies={["Node.js", "Express", "MongoDB"]}
                    description="Join our backend team to build scalable APIs and services."
                />
                <JobCard
                    title="Full Stack Developer"
                    bookmarked={true}
                    datePosted="2024-05-30"
                    technologies={["React", "Node.js", "GraphQL"]}
                    description="We need a full stack developer to work on both frontend and backend tasks."
                />
            </div>
        </div>
    );
}