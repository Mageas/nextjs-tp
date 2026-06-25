"use server";

import { createClient } from "@/prismicio";

export async function fetchPrismaticJobs(limit: number = 0) {
    const client = createClient();
    const jobs = await client.getAllByType("job");

    jobs.sort((a, b) => {
        const dateA = new Date(a.last_publication_date ?? 0);
        const dateB = new Date(b.last_publication_date ?? 0);
        return dateB.getTime() - dateA.getTime();
    });

    if (limit > 0) {
        jobs.splice(limit);
    }

    return jobs;
}