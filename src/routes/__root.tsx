import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/Navbar'
import NotFound from '../components/NotFound'

const RootLayout = () => (
  <>
    <Navbar/>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({
   component: RootLayout,
   notFoundComponent: NotFound,
})