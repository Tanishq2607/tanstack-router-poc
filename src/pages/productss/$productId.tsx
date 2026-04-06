import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
})

function ProductDetail() {
  const { productId } = Route.useParams()

  return (
    <div className="p-5">
      <h3>Product Detail Page</h3>
      <p>Product ID: {productId}</p>
    </div>
  )
}