export function ProjectMeta({
  role,
  timeline,
}: {
  role: string
  timeline: string
}) {
  return (
    <div className="mt-12 flex gap-12 text-sm text-gray-500">
      <div>
        <div className="uppercase text-xs mb-1">Role</div>
        <div>{role}</div>
      </div>

      <div>
        <div className="uppercase text-xs mb-1">Timeline</div>
        <div>{timeline}</div>
      </div>
    </div>
  )
}
