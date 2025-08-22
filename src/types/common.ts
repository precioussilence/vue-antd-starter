import type { VNode } from 'vue'

export interface RouteConfig {
  key?: string
  label?: string
  title?: string
  icon?: () => VNode
  name?: string
  path?: string
  component?: string
  meta?: {
    layout?: string
    title?: string
    icon?: string
  }
  children?: RouteConfig[]
}

export interface Breadcrumb {
  path: string
  breadcrumbName: string
}
