import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'list',
    component: () => import('../views/BookListView.vue'),
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/BookAddView.vue'),
  },
  {
    path: '/edit/:bookId',
    name: 'detail',
    component: () => import('../views/BookDetailView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
