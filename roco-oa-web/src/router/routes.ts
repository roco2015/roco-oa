const router = [
  {
    path: '/',
    redirect: '/workbench',
  },
  {
    name: 'workbench',
    path: '/workbench',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/bench/WorkBench.vue'),
  },
];

export default router;
