export function ProjectHero({
  title,
  image,
}: {
  title: string
  image: string
}) {
  return (
    <div className="mt-24 text-center">

      <h1 className="text-5xl font-semibold mb-8">
        {title}
      </h1>

      <div className="max-w-[900px] mx-auto">
        <img
          src={image}
          className="w-full rounded-xl shadow-lg"
        />
      </div>

    </div>
  )
}
