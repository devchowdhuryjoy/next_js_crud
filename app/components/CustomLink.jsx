"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CustomLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`px-4 py-2 rounded ${isActive ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
      {children}
    </Link>
  );
}
