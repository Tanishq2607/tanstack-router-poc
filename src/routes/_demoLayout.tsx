import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_demoLayout')({
  component: DemoLayout,
})

function DemoLayout() {
    return (
      <div className="p-5 border border-blue-400">
        <h2 className="text-xl font-bold mb-2">
          Pathless Layout Wrapper
        </h2>
        <Outlet />
      </div>
    )
  }
