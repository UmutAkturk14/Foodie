import { ChevronRight } from "lucide-react";

type DocCardProps = {
  title: string;
  items: { title: string; href: string }[];
};

export const DocCard = ({ title, items }: DocCardProps) => (
  <div className="bg-white rounded-lg border border-stone-100 shadow-sm p-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between items-center">
          <a
            href={item.href}
            className="group flex items-center text-earth-800 hover:text-warmth-700 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-orange-500 text-warmth-500 mr-2 transition-transform group-hover:translate-x-1" />
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
