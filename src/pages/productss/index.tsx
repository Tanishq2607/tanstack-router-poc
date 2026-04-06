import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: Products,
})

function Products() {
  const dummyProducts = [
    { id: '1', name: 'iPhone' },
    { id: '2', name: 'MacBook' },
  ]

  return (
    <div className="p-5">
      <h2>Products List</h2>

      {dummyProducts.map((p) => (
        <div key={p.id}>
          <Link to="/products/$productId" params={{ productId: p.id }}>
            {p.name}
          </Link>
        </div>
      ))}
    </div>
  )
}