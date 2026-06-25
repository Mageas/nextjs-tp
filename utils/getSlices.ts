import { JobDocument } from "@/prismicio-types.js";
import { asText } from "@prismicio/client";

export type JobSlice = {
    title: string;
    description: string;
};

export default function getSlices(job: JobDocument): JobSlice[] {
    return job.data.slices.map((slice) => {
        return {
            title: slice.primary.title ?? "",
            description: asText(slice.primary.description),
        };
    });
}