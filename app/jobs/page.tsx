"use client";

import { useEffect, useState } from "react";
import { fetchPrismaticJobs } from "@/actions/fetchPrismaticJobs";
import { fetchJobTags } from "@/actions/fetchJobTags";
import ClickableTag from "@/components/ui/ClickableTag";
import JobCard from "@/components/ui/JobCard";
import { JobDocument } from "@/prismicio-types.js";

const PAGE_SIZE = 3;

export default function Jobs() {
  const [tags, setTags] = useState<string[]>([]);
  const [jobs, setJobs] = useState<JobDocument[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobTags().then(setTags);
  }, []);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchPrismaticJobs(page, PAGE_SIZE).then((res) => {
      if (!active) {
        return;
      }
      setJobs(res.jobs);
      setTotalPages(res.totalPages);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [page]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Offres d&apos;emploi</h1>

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tech) => (
          <ClickableTag key={tech} name={tech} url={`/jobs/tags/${tech}`} />
        ))}
      </div>

      {loading && jobs.length === 0 ? (
        <p className="text-gray-500">Chargement des offres…</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={loading || page <= 1}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Précédent
        </button>
        <span className="text-sm text-gray-600">
          Page {page} / {totalPages}
        </span>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={loading || page >= totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
