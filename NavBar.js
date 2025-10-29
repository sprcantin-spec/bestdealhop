"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-50">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/frog-logo.png" alt="BestDealHop" width={36} height={36} className="rounded-md" />
          <span className="text-lg font-semibold tracking-tight">BestDealHop</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <Link href="/dashboard" className="hover:text-emerald-700">Dashboard</Link>
          <Link href="/privacy" className="hover:text-emerald-700">Privacy</Link>
          <Link href="/terms" className="hover:text-emerald-700">Terms</Link>
        </nav>

        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg border border-gray-300" aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container py-3 flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <Link href="/dashboard" className="hover:text-emerald-700">Dashboard</Link>
            <Link href="/privacy" className="hover:text-emerald-700">Privacy</Link>
            <Link href="/terms" className="hover:text-emerald-700">Terms</Link>
          </div>
        </div>
      )}
    </header>
  );
}
