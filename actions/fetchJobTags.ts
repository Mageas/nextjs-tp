"use server";

import { createClient } from "@/prismicio";

export async function fetchJobTags(): Promise<string[]> {
    const client = createClient();
    return client.getTags();
}
