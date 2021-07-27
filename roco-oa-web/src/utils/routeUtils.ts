import VueRouter from '@/router/index';

const router = VueRouter;

interface RouteLike {
  name?: string,
  path?: string,
  params?: any,
  query?: any
}

const toPage = (obj: RouteLike) => {
  if (obj.name) {
    router.push({ name: obj.name, params: obj.params });
  } else if (obj.path) {
    router.push({ path: obj.path, params: obj.params });
  }
};

const isEqualToCurrentRoute = (obj: RouteLike) => {
  const route = VueRouter.currentRoute.value;
  return route.name === obj.name || route.path === obj.path;
};

export { toPage, isEqualToCurrentRoute };
