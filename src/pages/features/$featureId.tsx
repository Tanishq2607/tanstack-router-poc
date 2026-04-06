import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shops/$featureId')({
  component: FeatureDetail,
})

function FeatureDetail() {
  const { featureId } = Route.useParams()

  return (
    <div className="p-5">
      <h3>Feature Detail</h3>
      <p>ID: {featureId}</p>
    </div>
  )
}