import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/files/$')({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams();

  return (
    <div>
      Splat: {params._splat}
    </div>
  )
}