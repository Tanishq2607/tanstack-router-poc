import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/$postId')({
  component: PostDetail,
})

function PostDetail() {
  const { postId } = Route.useParams()

  return (
    <div>
      <h3>Post ID: {postId}</h3>
    </div>
  )
}