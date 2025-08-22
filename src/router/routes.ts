import type { MenuItemType, SubMenuType } from 'ant-design-vue/es/menu/src/hooks/useItems'
import type { RouteRecordSingleView, RouteRecordSingleViewWithChildren } from 'vue-router'
import type { RouteConfig } from '@/types/common'
import { AppstoreOutlined, DownloadOutlined, EyeInvisibleOutlined, HomeOutlined, MenuOutlined, SettingOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons-vue'

export const routes: RouteConfig[] = [
  {
    key: '/',
    label: '首页',
    title: '首页',
    icon: () => h(HomeOutlined),
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { layout: 'main', title: '首页' },
  },
  {
    key: '/2',
    label: 'Option 2',
    title: 'Option2',
    icon: () => h(AppstoreOutlined),
  },
  {
    key: '/3',
    label: 'Option 3',
    title: 'Option 3',
    icon: () => h(DownloadOutlined),
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: { layout: 'auth', title: '登录' },
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('@/views/Register.vue'),
    meta: { layout: 'auth', title: '注册' },
  },
  {
    name: 'Unauthorized',
    path: '/unauthorized',
    component: () => import('@/views/403.vue'),
    meta: { layout: 'main', title: '无权限' },
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
    meta: { layout: 'main', title: '页面未找到' },
  },
  {
    key: '/system',
    label: '系统管理',
    title: '系统管理',
    icon: () => h(SettingOutlined),
    name: 'System',
    path: '/system',
    children: [
      {
        key: '/system/user',
        label: '用户管理',
        title: '用户管理',
        icon: () => h(UserOutlined),
        name: 'SyestemUser',
        path: 'user',
        component: () => import('@/views/system/User.vue'),
      },
      {
        key: '/system/role',
        label: '角色管理',
        title: '角色管理',
        icon: () => h(UserSwitchOutlined),
        name: 'SystemRole',
        path: 'role',
      },
      {
        key: '/system/menu',
        label: '菜单管理',
        title: '菜单管理',
        icon: () => h(MenuOutlined),
        name: 'SystemMenu',
        path: 'menu',
      },
      {
        key: '/unauthorized',
        label: 'Option 8',
        title: 'Option 8',
        icon: () => h(EyeInvisibleOutlined),
        name: 'Option 8',
        path: '/unauthorized',
      },
    ],
  },
]

function convertMenu(config: RouteConfig): MenuItemType | SubMenuType | null {
  if (!config.key || !config.label) {
    return null
  }
  if (config.children && config.children.length > 0 && config.children.some(child => child.key && child.label)) {
    const item: SubMenuType = {
      key: config.key,
      label: config.label,
      icon: config.icon,
      children: config.children.map(convertMenu).filter(item => item !== null),
    }
    return item
  }
  else {
    const item: MenuItemType = {
      key: config.key,
      label: config.label,
      icon: config.icon,
    }
    return item
  }
}

export const menuItems = routes.map(convertMenu).filter(item => item !== null)

function convertRoute(config: RouteConfig): RouteRecordSingleView | RouteRecordSingleViewWithChildren | null {
  if (!config.path || !config.name) {
    return null
  }
  if (!config.component && !config.children) {
    return null
  }
  const item = {
    path: config.path,
    name: config.name,
    meta: config.meta,
    component: config.component ? config.component : undefined,
  } as RouteRecordSingleView | RouteRecordSingleViewWithChildren
  item.children = config.children && config.children.some(child => child.path && child.name && (child.component || child.children))
    ? config.children.map(convertRoute).filter(child => child !== null)
    : undefined

  return item
}

export const routeItems = routes.map(convertRoute).filter(item => item !== null)
