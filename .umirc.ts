import { defineConfig} from 'umi';

export default defineConfig({
  dynamicImport: {},
//   exportStatic:{htmlSuffix: true,dynamicRoot: true,},
//   history: { type: 'hash' },
  base:"/",
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{
    name: 'JackSunday', 
  },
  routes: [
    { 
      path: '/',
      layout: {
        hideMenu: true,
        hideNav: true,
      },
      component:'@/pages/home',
  },
    {
      path: '/welcome',
      menu: {
        name: '折线图', // 兼容此写法
        hideChildren: false,
      },
      routes: [
        {
          path: '/welcome/second',
          menu: {
            name: '普通折线图', // 兼容此写法
            hideChildren: false,
            
          },
          layout: {
            hideNav: true,
          },
          component:'@/pages/home',
          access: 'canRead',
        }
      ],
      layout: {
        hideNav: true,
      },
      access: 'canRead',
    },
    {
      path: '/map',
      menu: {
        name: '地图', // 兼容此写法
        hideChildren: false,
      },
      routes: [
        {
          path: '/map/chinaMap',
          menu: {
            name: '中国地图', // 兼容此写法
            hideChildren: false,
          },
          layout: {
            hideNav: true,
          },
          component:'@/pages/chinaMap',
          access: 'canRead',
        },
        {
          path: '/map/jiangsuMap',
          menu: {
            name: '江苏地图', // 兼容此写法
            hideChildren: false,
          },
          layout: {
            hideNav: true,
          },
          component:'@/pages/jiangsuMap',
          access: 'canRead',
        },
      ],
      layout: {
        hideNav: true,
      },
      access: 'canRead',
    },
  ],
});
