"use server";

import { createClient } from "@/prismicio";

export default async function submitApplicationAction(formData: FormData) {
const client = createClient();
  const jobSlug = formData.get("jobSlug") as string;
  const job = await client.getByUID("job", jobSlug).catch(() => null);

  if (!job) {
    return {
      success: false,
      error: "Job not found",
    };
  }

  const emails = job.data?.emails ?? [];

  console.log("Submitting application for job:", jobSlug);
  console.log("Application text:", formData.get("applicationText"));
  console.log("Emails to send to:", emails);

  return {
    success: true,
  };
}
