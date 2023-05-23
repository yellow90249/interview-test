import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/books',
    name: 'list',
    component: () => import('../views/ListView.vue'),
  },
  {
    path: '/books/:bookId',
    name: 'detail',
    component: () => import('../views/DetailView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
