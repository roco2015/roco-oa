import { workbenchRoutes } from '@/router/workbenchRoutes';

const router = [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: 'menu' */ '@/views/login/Login.vue'),
  },
  {
    name: '/',
    path: '/',
    redirect: '/workbench',
    component: () => import(/* webpackChunkName: 'menu' */ '@/layout/CommonLayout.vue'),
    children: [
      ...workbenchRoutes,
    ],
  },
];

export default router;
