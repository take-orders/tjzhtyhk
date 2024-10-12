import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, { path: '/:pathMatch(.*)*', redirect: '/' }],
});

export function to(params) {
  if (params?.url) {
    window.open(params.url);
  } else {
    router.push(params);
  }
}

if (import.meta.hot) {
  handleHotUpdate(router)
};
