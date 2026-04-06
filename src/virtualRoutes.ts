import { rootRoute, route, index, physical } from '@tanstack/virtual-file-routes'

export const routes = rootRoute('__root.tsx', [

  // ✅ include ALL existing file-based routes
  physical('./'), 

  // ✅ your virtual routes
  route('/shops', [
    index('../pages/features/index.tsx'),
    route('/$featureId', '../pages/features/$featureId.tsx'),
  ]),
])