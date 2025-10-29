import "./globals.css";

export const metadata = {
  title: "BestDealHop — Shop Smarter",
  description: "A clean Shopify-style storefront for finding today's best deals."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
