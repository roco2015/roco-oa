import { RouteRecordRaw } from 'vue-router';

const routesWithMenu = [
  {
    name: 'workbench',
    path: '/workbench',
    meta: { title: '工作台' },
    component: () => import(/* webpackChunkName: 'home' */ '@/views/bench/WorkBench.vue'),
  },
  {
    type: 'menu',
    meta: { title: '排期' },
    children: [
      {
        name: 'NotYetSchedule',
        path: '/schedule/NotYetSchedule',
        meta: { title: '未排期' },
        component: () => import(/* webpackChunkName: 'schedule' */ '@/views/schedule/NotYetSchedule.vue'),
      },
      {
        name: 'MySchedule',
        path: '/schedule/MySchedule',
        meta: { title: '我的排期' },
        component: () => import(/* webpackChunkName: 'schedule' */ '@/views/schedule/MySchedule.vue'),
      },
      {
        name: 'AllSchedule',
        path: '/schedule/AllSchedule',
        meta: { title: '所有排期' },
        component: () => import(/* webpackChunkName: 'schedule' */ '@/views/schedule/AllSchedule.vue'),
      },
    ],
  },
  {
    name: 'timeline',
    path: '/timeline',
    meta: { title: '时间轴' },
    component: () => import(/* webpackChunkName: 'timeline' */ '@/views/about/Timeline.vue'),
  },
];

interface Menu {
  title?: string,
  name?: string,
  path?: string,
  children?: Menu[]
}

const workbenchRoutes :RouteRecordRaw[] = [];
const menuObj: Menu = {
  title: '所有菜单',
  children: [],
};

(function formatMenuAndRoute(routes, menus?) {
  routes.forEach((route) => {
    let menu: Menu | undefined;
    if (menus) {
      menu = {
        title: route.meta?.title || '',
      };
      if (route.type === 'menu') {
        menu.children = [];
      } else {
        menu.path = route.path;
        menu.name = route.name;
      }
      menus.push(menu);
    }

    if (route.type !== 'menu') {
      workbenchRoutes.push(route as RouteRecordRaw);
    }

    if (route.children) {
      formatMenuAndRoute(route.children as typeof routesWithMenu, menu?.children);
    }
  });
}(routesWithMenu, menuObj.children));

export { workbenchRoutes, menuObj };
