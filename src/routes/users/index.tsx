import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchUsers } from '../../api/users'

export const Route = createFileRoute('/users/')({
  validateSearch: (search) => {
    return{
      page: search.page || 1,
    }
  },
  component: Users,
  loaderDeps: ({search: {page}}) => page,//loaderDeps is used to pass the search params in the loaders
  loader: async ({ deps: page }) => fetchUsers(page),
})

function Users() {
  const data = Route.useLoaderData()

  return( 
    <div className="p-10">
      <h1 className='text-4xl font-bold mb-2'>User Listing</h1>
      <p className='text-gray-800 mb-3'>This is Users Listing</p>

      <ul>
        {data.map((u: User) => (
          <li key={u.id} className='mb-2'>
            <Link 
            className='text-blue-500 hover:text-blue-700' 
            to="/users/$userId" 
            params={{userId: u.id}}>
            mask={{
              to: '/user',
            }}
              {u.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}