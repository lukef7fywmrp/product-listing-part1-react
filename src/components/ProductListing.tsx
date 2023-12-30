import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Product } from "@/lib/definitions";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import { Button } from "./ui/button";
import { toast } from "sonner";

function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch products from the Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        // To test error handling
        // throw new Error("Something went wrong");

        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        toast.error(error.message);

        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-6xl mx-auto min-h-screen py-24">
      {error ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl text-[#9098A5]">Something went wrong</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between p-6">
            <h2 className="text-4xl font-semibold text-[#5E687C]">Batteries</h2>
            <Button variant={"ghost"} className="text-[#9098A5]">
              View all batteries
            </Button>
          </div>
          <ScrollArea className="rounded-md bg-transparent">
            <div className="flex w-max gap-x-12 p-6">
              {loading && (
                <>
                  {Array.from({ length: 4 }, (_, i) => (
                    <ProductSkeleton key={i} />
                  ))}
                </>
              )}

              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </>
      )}
    </section>
  );
}

export default ProductListing;
