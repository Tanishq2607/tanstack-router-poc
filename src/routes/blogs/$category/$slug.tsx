import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/$category/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blogs/$category/$slug"!</div>
}
