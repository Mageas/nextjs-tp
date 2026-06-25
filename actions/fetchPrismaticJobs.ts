"use server";

import { createClient } from "@/prismicio";
import { JobDocument } from "@/prismicio-types.js";

export async function fetchPrismaticJobs(limit: number = 0, ids: string[] = []) {
    const client = createClient();
    let jobs: JobDocument[] = [];

    if (ids.length > 0) {
        jobs = await client.getAllByUIDs("job", ids);
    } else {
        jobs = await client.getAllByType("job");
    }

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