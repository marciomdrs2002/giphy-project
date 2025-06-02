export default {
  path: 'favorites',
  component: () => import('pages/favorites/favorites-page.vue'),
  children: [
    // {
    //   path: '',
    //   name: 'favorites',
    //   component: () => import('pages/favorites/FavoritesList.vue'),
    // },
    // {
    //   path: 'collections',
    //   name: 'favorites-collections',
    //   component: () => import('pages/favorites/CollectionsPage.vue'),
    // },
    // {
    //   path: 'collection/:id',
    //   name: 'favorite-collection',
    //   component: () => import('pages/favorites/CollectionDetail.vue'),
    // },
  ],
}
