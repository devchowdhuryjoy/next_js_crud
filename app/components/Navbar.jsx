"use client";
import CustomLink from "./CustomLink";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Navbar() {
  const router = useRouter();

const handleLogout = () => {
    Swal.fire({
      title: "আপনি কি নিশ্চিত?",
      text: "আপনি লগআউট করতে চান?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "হ্যাঁ, লগআউট করুন!",
      cancelButtonText: "বাতিল"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("User logged out");
        Swal.fire("লগআউট!", "আপনি সফলভাবে লগআউট হয়েছেন।", "success");
      }
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-100 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
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
