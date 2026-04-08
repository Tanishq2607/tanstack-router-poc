import { createFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'

export const Route = createFileRoute('/post/$postId')({
  component: PostDetail,
})

function PostDetail() {
  const { postId } = Route.useParams()
  const location = useLocation()

  const isModal = location.pathname.endsWith('/model')
  
  return (
    <div>
      {!isModal && <h3>Post ID: {postId}</h3>}

      <Link
        to="/post/$postId/model"
        params={{ postId }}
        mask={{
          to: '/post/$postId',
          params: { postId },
        }}
      >
        lets go on the model
      </Link>

      <Outlet />
    </div>
  )
}