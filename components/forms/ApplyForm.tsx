import submitApplicationAction from "@/actions/submitApplication";

export default function ApplyForm({ jobSlug }: { jobSlug: string }) {
    return (
        <form action={submitApplicationAction} className="flex flex-col gap-4">
            <textarea
                placeholder="Write your application here..."
                className="w-full p-2 border border-gray-300 rounded"
                name="applicationText"
            />
            <input type="hidden" name="jobSlug" value={jobSlug} />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Envoyer la candidature
            </button>
        </form>
    );
}