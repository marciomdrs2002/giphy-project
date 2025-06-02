const routes = [
  {
    path: '/',
    component: () => import('layouts/main-layout.vue'),
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('pages/home/home-page.vue'),
      },
      {
        path: 'favorites',
        name: 'favorites',
        component: () => import('pages/favorites/favorites-page.vue'),
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('pages/categories/categories-page.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/about/about-page.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/error/error-404.vue'),
  },
]

export default routes
