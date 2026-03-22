import React from "react"
import { useParams } from "react-router-dom"

const pages = import.meta.glob<{
  default: React.ComponentType<any>
}>("../projects/*/page.tsx")

export default function ProjectDetail() {
  const { slug } = useParams()

  const loader = pages[`../projects/${slug}/page.tsx`]

  if (!loader) {
    return <div className="p-24">Project not found</div>
  }

  const Page = React.lazy(loader)

  return (
    <React.Suspense fallback={<div className="p-24">Loading…</div>}>
      <Page />
    </React.Suspense>
  )
}
