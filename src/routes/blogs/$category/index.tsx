import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/$category/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blogs/$category/"!</div>
}
