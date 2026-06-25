import ListJobs from "@/components/layouts/ListJobs";
import ButtonLink from "@/components/ui/ButtonLink";
import { createClient } from "@/prismicio";
import Image from "next/image";
import Link from "next/link.js";

export default async function Home() {
  const client = createClient();
  const home = await client.getSingle("home");

  return (
    <div className="flex flex-col items-center w-full">
        <div className="relative w-full h-64 mb-4">
          <Image src="/cover.png" alt="Cover Image" fill sizes="100vw" className="rounded-lg shadow-md mb-4" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          {home.data.title}
        </h1>
        <ListJobs limit={6} />
        <ButtonLink href="/jobs" className="mt-4">
          Voir toutes les offres d&apos;emploi
        </ButtonLink>
        <p className="mt-4 text-gray-600 dark:text-gray-300 font-bold">
          Bonne nouvelle ! Il y a maintenant une superbe API pour rechercher des offres d&apos;emploi. Vous pouvez l&apos;utiliser pour trouver des opportunités qui correspondent à vos compétences et à vos intérêts. N&apos;hésitez pas à explorer et à postuler aux offres qui vous intéressent !
        </p>
        <Link href="/api/v1/jobs" className="mt-4 text-blue-500 hover:underline">
          Accéder à l&apos;API des offres d&apos;emploi
        </Link>
    </div>
  );
}
