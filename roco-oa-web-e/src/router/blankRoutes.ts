const blankRoutes = [
  {
    name: 'demandEdit',
    path: '/dingtalk/demand/edit',
    meta: { title: '编辑需求' },
    component: () => import(/* webpackChunkName: 'dingtalk' */ '@/views/dingtalk/DemandEdit.vue'),
  },
];

export { blankRoutes };
