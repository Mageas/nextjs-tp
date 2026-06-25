import Link from "next/link.js";

export default function ClickableTag({ name, url }: { name: string; url: string }) {
  return (
    <Link href={url} className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
      {name}
    </Link>
  );
}