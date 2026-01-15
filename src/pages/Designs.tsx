export default function Designs() {
  return (
    <div className="min-h-screen bg-black text-white px-12 py-24">
      <h1 className="text-6xl mb-16">Design Experiments</h1>

     <div className="grid grid-cols-5 gap-12">
        {Array.from({ length: 75 }).map((_, i) => (
          <div
            key={i}
            className="relative w-full rounded-xl overflow-hidden bg-zinc-900 group
             transition-transform duration-500 ease-out
             hover:scale-[1.03] hover:-translate-y-2"
          >
            <img
              src={`/assets/designs/${i + 1}.svg`}
             className="w-full h-full object-cover
             transition-transform duration-700 ease-out
             group-hover:scale-110"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
                bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
