import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchUser } from '../../api/users';

export const Route = createFileRoute('/users/$userId')({
  loader: async ({ params }) => {
    // throw new Error();
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return fetchUser(params.userId)
  },
  component: UserID,
  pendingComponent: () => <div className='p-10'>...Loading</div>,
  errorComponent: () => (
    <div className="p-10">There was an error fetching data..</div>
  ),
})

function UserID() {
  const data = Route.useLoaderData();
  return( 
    <div className="p-10">
      <h1 className='text-4xl font-bold mb-2'>Users Details</h1>
      <div className='flex mb-4'>
        <div className='flex flex-col'>
          <span>
            {data.firstName} {data.lastName}
          </span>
          <span>{data.email}</span>
          <span>{data.gender}</span>
          <span>{data.age}</span>
        </div>
      </div>
      <Link 
        className='text-blue-500 hover:text-blue-700' 
        to='/users' 
        search={{page: 2}}
      >
          Back to the UserList
      </Link>
    </div>
  )
}