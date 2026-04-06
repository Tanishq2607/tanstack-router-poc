import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/post/$postId/model')({
  component: ModelPage,
})

function ModelPage() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          width: '300px',
          textAlign: 'center',
        }}
      >
        <h2>🔥 Modal Opened</h2>
        <p>This is overlay modal UI</p>

        <button
          onClick={() =>
            navigate({
              to: '/post/$postId',
              params: { postId: '1' },
            })
          }
        >
          Close
        </button>
      </div>
    </div>
  )
}