export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-24 max-w-[720px]">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </section>
  )
}
