import type { MenuItemType, SubMenuType } from 'ant-design-vue/es/menu/src/hooks/useItems'
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
    component: '@/views/Home.vue',
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
    component: '@/views/Login.vue',
    meta: { layout: 'auth', title: '登录' },
  },
  {
    name: 'Register',
    path: '/register',
    component: '@/views/Register.vue',
    meta: { layout: 'auth', title: '注册' },
  },
  {
    name: 'Unauthorized',
    path: '/unauthorized',
    component: '@/views/403.vue',
    meta: { layout: 'main', title: '无权限' },
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: '@/views/404.vue',
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
