import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_demoLayout/demo')({
  component: DemoPage,
})

function DemoPage() {
  return (
    <div className="p-5">
      <h3>This page is wrapped inside pathless layout</h3>
    </div>
  )
}