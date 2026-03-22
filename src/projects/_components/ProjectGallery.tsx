export function ProjectGallery({ images }: { images: string[] }) {
  return (
    <div className="mt-32 space-y-32">
      {images.map((src, i) => (
        <div
          key={i}
          className={`w-full flex ${
            i % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <img
            src={src}
            className="w-[85%] md:w-[70%] rounded-xl shadow-lg"
          />
        </div>
      ))}
    </div>
  )
}
