import { Badge } from "./ui/badge";
import luminous from "@/assets/luminous.svg";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const productSpecs = [
  {
    id: "1",
    title: "Capacity",
    value: "35 AH",
  },
  {
    id: "2",
    title: "Warranty",
    value: "3 yrs",
  },
  {
    id: "3",
    title: "Price",
    value: "Wholesale only",
  },
] as const;

function ProductInfo({
  title,
  description,
  category,
}: {
  title: string;
  description: string;
  category: string;
}) {
  return (
    <div className="space-y-4 border-b pb-4">
      <div className="flex items-center justify-between space-x-2">
        <Badge className="bg-[#EEF5F0] rounded text-[#519C66] hover:bg-[#519C66] hover:text-[#EEF5F0] transition">
          10% Newyear offer
        </Badge>

        <Badge className="rounded" variant={"outline"}>
          <img src={luminous} alt="luminous" className="object-contain" />
        </Badge>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <p className="text-2xl font-semibold w-60 line-clamp-4">{title}</p>

        <Button variant={"secondary"} size={"icon"} className="h-14 w-14">
          <Heart className="text-[#9098A5]" />
        </Button>
      </div>

      <div className="space-x-2">
        <Badge className="bg-[#EAECFB] font-medium text-[#707FE2] rounded hover:bg-[#707FE2] hover:text-[#EAECFB] transition">
          Selling out fast
        </Badge>
        <Badge className="bg-[#FFE389]/20 text-[#B59738] rounded hover:bg-[#FFE389]/90 transition">
          Best in UAE
        </Badge>
      </div>

      <div className="flex items-center justify-between">
        {productSpecs.map((spec) => (
          <div key={spec.id}>
            <p className="text-[#B4B9C3] text-xs">{spec.title}</p>
            <p className="text-[#9098A5] font-medium text-base">{spec.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductInfo;
