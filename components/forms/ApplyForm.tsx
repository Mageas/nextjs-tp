"use client";
import { useActionState } from "react";
import submitApplicationAction from "@/actions/submitApplication";
import { JobDocument } from "@/prismicio-types.js";
import { useHistoryState } from "@/store/history";

export default function ApplyForm({ job }: { job: JobDocument }) {
  const [state, formAction, pending] = useActionState(submitApplicationAction, null);
  const addHistory = useHistoryState((state) => state.addHistory);

  if (state?.success) {
    addHistory(job);
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <textarea name="applicationText" placeholder="Write your application here..."
        className="w-full p-2 border border-gray-300 rounded" />
      <input type="hidden" name="jobSlug" value={job.uid} />
      <button type="submit" disabled={pending}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50">
        {pending ? "Envoi…" : "Envoyer la candidature"}
      </button>

      {state?.error && <p className="text-red-500">{state.error}</p>}
      {state?.success && <p className="text-green-600">Candidature envoyée !</p>}
    </form>
  );
}