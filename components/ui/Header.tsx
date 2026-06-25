import Image from "next/image";
import Link from "next/link.js";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/profile" className="hover:underline">
                                Profil
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}