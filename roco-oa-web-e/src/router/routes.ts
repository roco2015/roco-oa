import { workbenchRoutes } from '@/router/workbenchRoutes';
import { blankRoutes } from '@/router/BlankRoutes';

const router = [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: 'menu' */ '@/views/login/Login.vue'),
  },
  {
    name: 'index',
    path: '/',
    redirect: '/workbench',
    component: () => import(/* webpackChunkName: 'menu' */ '@/layout/CommonLayout.vue'),
    children: [
      ...workbenchRoutes,
    ],
  },
  {
    name: 'dingtalk',
    path: '/dingtalk',
    component: () => import(/* webpackChunkName: 'dingtalk' */ '@/layout/BlankLayout.vue'),
    children: [
      ...blankRoutes,
    ],
  },
];

export default router;
