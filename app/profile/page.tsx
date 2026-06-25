"use client";
import { useEffect, useState } from "react";
import { fetchPrismaticJobs } from "@/actions/fetchPrismaticJobs";
import { usePinState } from "@/store/pins";
import JobCard from "@/components/ui/JobCard";
import { JobDocument } from "@/prismicio-types.js";
import { useHistoryState } from "@/store/history";
import Button from "@/components/ui/Button";

export default function Profile() {
  const pins = usePinState((state) => state.pins);
  const [jobs, setJobs] = useState<JobDocument[]>([]);

  const history = useHistoryState((state) => state.history);
  const resetHistory = useHistoryState((state) => state.reset);

  useEffect(() => {
    if (pins.length === 0) {
      setJobs([]);
      return;
    }
    fetchPrismaticJobs(1, pins.length, pins).then((res) => setJobs(res.jobs));
  }, [pins]);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
    <div className="mt-8">
      <div className="my-4">
        <h1 className="text-2xl font-bold">Historique des offres</h1>
        <Button onClick={() => resetHistory()} >
          Réinitialiser l&apos;historique
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {history.length === 0 ? (
          <p>Aucune offre dans l&apos;historique.</p>
        ) : (
          history.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </div>
    </div>
    </>
  );
}