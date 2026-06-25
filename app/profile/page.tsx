"use client";
import { useEffect, useState } from "react";
import { fetchPrismaticJobs } from "@/actions/fetchPrismaticJobs";
import { usePinState } from "@/store/pins";
import JobCard from "@/components/ui/JobCard";
import { JobDocument } from "@/prismicio-types.js";

export default function Profile() {
  const pins = usePinState((state) => state.pins);
  const [jobs, setJobs] = useState<JobDocument[]>([]);

  useEffect(() => {
    if (pins.length === 0) {
      setJobs([]);
      return;
    }
    fetchPrismaticJobs(0, pins).then(setJobs);
  }, [pins]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}