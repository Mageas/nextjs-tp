"use server";

import { createClient } from "@/prismicio";
import { JobDocument } from "@/prismicio-types.js";

export type PaginatedJobs = {
    jobs: JobDocument[];
    page: number;
    totalPages: number;
    totalResults: number;
};

export async function fetchPrismaticJobs(page: number = 1, pageSize: number = 6, ids: string[] = []): Promise<PaginatedJobs> {
    const client = createClient();

    if (ids.length > 0) {
        const jobs = await client.getAllByUIDs("job", ids);
        jobs.sort(
            (a, b) =>
                new Date(b.last_publication_date ?? 0).getTime() -
                new Date(a.last_publication_date ?? 0).getTime()
        );
        return { jobs, page: 1, totalPages: 1, totalResults: jobs.length };
    }

    const response = await client.getByType("job", {
        page,
        pageSize,
        orderings: [
            { field: "document.last_publication_date", direction: "desc" },
        ],
    });

    return {
        jobs: response.results,
        page: response.page,
        totalPages: response.total_pages,
        totalResults: response.total_results_size,
    };
}
