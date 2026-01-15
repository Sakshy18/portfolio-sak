interface PortfolioItem {
  title: string;
  img: string;
}

const items: PortfolioItem[] = [
  { title: "Branding: Zeronet", img: "/assets/Frame1.png" },
  { title: "Mobile App UI: FocusFlow", img: "/assets/Frame2.png" },
  // You can add more items here.
];

export default function DesignPortfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map(({ title, img }) => (
        <div
          key={title}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img src={img} alt={title} className="mb-4 rounded-lg" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
      ))}
    </div>
  );
}
