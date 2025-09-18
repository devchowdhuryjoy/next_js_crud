"use client";

import CustomLink from "./CustomLink";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Navbar() {
  const router = useRouter(); // ✅ Only call useRouter once here

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove login info
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");

        // Show success message and redirect
        Swal.fire("Logged Out!", "You have successfully logged out.", "success").then(() => {
          router.push("/login");
        });
      }
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-100 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="USA Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex space-x-2 items-center">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/about">About</CustomLink>
          <CustomLink href="/services">Services</CustomLink>
          <CustomLink href="/contact">Contact</CustomLink>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
