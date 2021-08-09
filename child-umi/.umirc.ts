import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // fastRefresh: {},
  headScripts: [
    `window.routerBase = window.__MICRO_APP_ENVIRONMENT__ ? window.__MICRO_APP_BASE_URL__ : window.routerBase;`,
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
});
