"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { products } from "../lib/products";

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(p => (q ? p.title.toLowerCase().includes(q) : true));
  }, [query]);

  return (
    <main>
      <NavBar />
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-white to-gray-50/60">
        <div className="container py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Shop the best deals — all in one place.
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Clean, modern storefront. Curated bargains from major retailers.
              Seamless experience powered by AI.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a className="btn btn-primary" href="/dashboard">Open Dashboard</a>
              <a className="btn btn-outline" href="#grid">Browse Products</a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop"
              alt="Storefront hero"
              width={900}
              height={700}
              className="rounded-xl shadow-card border border-gray-100"
              priority
            />
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="container py-6">
        <div className="card p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full md:max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          />
          <div className="text-sm text-gray-600">Showing {filtered.length} products</div>
        </div>
      </section>

      {/* Grid */}
      <section id="grid" className="container pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        {filtered.length === 0 && (
          <div className="mt-8 text-center text-gray-600">No products match your search.</div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="container py-8 text-sm text-gray-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} BestDealHop</span>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="/privacy">Privacy</a>
            <a className="hover:underline" href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
