import ListJobs from "@/components/layouts/ListJobs";
import { createClient } from "@/prismicio";
import Image from "next/image";

export default async function Home() {
  const client = createClient();
  const home = await client.getSingle("home");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 dark:bg-gray-900">
        <div className="relative w-full h-64 mb-4">
          <Image src="/cover.png" alt="Cover Image" fill sizes="100vw" className="rounded-lg shadow-md mb-4" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          {home.data.title}
        </h1>
        <ListJobs limit={6} />
    </div>
  );
}
