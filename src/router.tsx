import { createRouter } from '@tanstack/react-router'

// Import the generated route tree

import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({
  routeTree: routeTree, // base = file-based
  routeMasks: [], // optional, for masking demo later
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router;