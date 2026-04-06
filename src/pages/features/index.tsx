import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/shops/')({
  component: Features,
})

function Features() {
  const features = [
    { id: '1', name: 'iPhone' },
    { id: '2', name: 'MacBook' },
  ]

  return (
    <div className="p-5">
      <h2>Features List</h2>

      {features.map((f) => (
        <div key={f.id}>
          <Link to="/shops/$featureId" params={{ featureId: f.id }}>
            {f.name}
          </Link>
        </div>
      ))}
    </div>
  )
}