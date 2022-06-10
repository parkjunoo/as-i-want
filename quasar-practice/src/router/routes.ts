import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/MainPage.vue'),
    children: [
      { path: '/add', component: () => import('pages/AddCard.vue') },
      { path: '/detail/:id', component: () => import('pages/CardDetail.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
