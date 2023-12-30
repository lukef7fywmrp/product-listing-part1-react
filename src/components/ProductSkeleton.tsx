import { Skeleton } from "@/components/ui/skeleton";

function ProductSkeleton() {
  return (
    <div className="rounded-3xl bg-white border-none h-fit">
      <div className="p-10 flex gap-x-7">
        <div>
          <Skeleton className="h-96 w-96 flex-1 max-w-sm rounded-[20px]" />

          <div className="flex gap-3 mt-4">
            <Skeleton className="w-16 h-16" />
            <Skeleton className="w-16 h-16" />
            <Skeleton className="w-16 h-16" />
            <Skeleton className="w-16 h-16" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="space-y-4 border-b py-4 h-full flex flex-col">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-10 w-40" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-5 w-24" />
              <div className="gap-3 flex items-center">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-10 w-40" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-5 w-24" />
              <div className="gap-3 flex items-center">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
              </div>
            </div>

            <div className="space-y-2 flex-1 flex items-end">
              <Skeleton className="w-96 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
