import Image from "next/image";

function Stars({ rating = 0 }) {
  const full = Math.round(rating);
  return (
    <div className="text-amber-400 text-sm" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}{"☆".repeat(Math.max(0, 5 - full))}
    </div>
  );
}

export default function ProductCard({ product }) {
  const { title, price, listPrice, rating, image, url } = product;
  const savings = listPrice ? Math.max(0, Math.round(100 - (price / listPrice) * 100)) : 0;

  return (
    <a href={url} className="card group block overflow-hidden">
      <div className="relative aspect-square bg-gray-50">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-[1.02] transition" sizes="(min-width: 768px) 25vw, 90vw" />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium line-clamp-2">{title}</h3>
          {savings > 0 && <span className="badge badge-save">Save {savings}%</span>}
        </div>
        <div className="flex items-baseline gap-2">
          <div className="text-xl font-semibold">${price.toFixed(2)}</div>
          {listPrice && <div className="text-sm line-through text-gray-500">${listPrice.toFixed(2)}</div>}
        </div>
        <Stars rating={rating} />
        <div className="pt-2">
          <span className="btn btn-outline">View deal →</span>
        </div>
      </div>
    </a>
  );
}
