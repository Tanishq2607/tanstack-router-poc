import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-10">
      <h1 className='text-4xl font-bold mb-2'>Welcome to Tanstack React Router!</h1>
      <p className='text-gray-800 mb-3'>Here we will explore the following features:-</p>
      <ul className='text-gray-600 text-sm'>
        <li>File Based Routing</li>
        <li>Dynamic Routing</li>
        <li>Nested Routing</li>
        <li>Data Loading</li>
        <li>Search Params</li>
        <li>Path Params</li>
        <li>Code Spliting</li>
        <li>Not Found Error</li>
      </ul>
    </div>
  )
}