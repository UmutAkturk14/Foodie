import { DocCard } from "./DocCard";
import DocContent from "./DocContent";

type DocSection = {
  title: string;
  items: { title: string; href: string }[];
};

const docSections: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "#installation" },
      { title: "Basic Usage", href: "#basic-usage" },
      { title: "Configuration", href: "#configuration" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Store API", href: "#store-api" },
      { title: "State Management", href: "#state-management" },
      { title: "Type Safety", href: "#type-safety" },
    ],
  },
  {
    title: "Advanced Usage",
    items: [
      { title: "Middleware", href: "#middleware" },
      { title: "API Integration", href: "#api-integration" },
      { title: "Performance Tips", href: "#performance-tips" },
    ],
  },
];

export const Documentation = () => (
  <section
    className="py-16 bg-secondary/30 flex justify-center items-center"
    id="documentation"
  >
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">
          Documentation
        </h2>
        <p className="text-lg text-muted-foreground max-w-[42rem]">
          Everything you need to know to get the most out of our library.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {docSections.map((section, index) => (
          <DocCard key={index} title={section.title} items={section.items} />
        ))}
      </div>

      <DocContent />
    </div>
  </section>
);
