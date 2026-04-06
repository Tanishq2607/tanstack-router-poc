import {
  rootRoute,
  route,
  index,
  // physical,
} from '@tanstack/virtual-file-routes'


export const routes = rootRoute('routes/__root.tsx', [

  route('/shops', [
    index('pages/products/index.tsx'),
    route('/:productId', 'pages/products/$productId.tsx'),
  ]),

])