import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/books',
    name: 'list',
    component: () => import('../views/BookListView.vue'),
  },
  {
    path: '/books/add',
    name: 'add',
    component: () => import('../views/BookAddView.vue'),
  },
  {
    path: '/books/:bookId',
    name: 'detail',
    component: () => import('../views/BookDetailView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
