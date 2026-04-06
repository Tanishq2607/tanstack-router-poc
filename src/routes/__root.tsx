import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import NotFound from '../components/NotFound'

const RootLayout = () => (
  <>
    <Navbar/>
    <hr />
    <Outlet />
  </>
)

export const Route = createRootRoute({
   component: RootLayout,
   notFoundComponent: NotFound,
})