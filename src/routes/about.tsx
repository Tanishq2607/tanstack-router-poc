import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return( 
  <div className="p-10">
    <h1 className='text-4xl font-bold mb-2'>About Us</h1>
    <p className='text-gray-800 mb-3'>This is about us</p>
  </div>

  )
}