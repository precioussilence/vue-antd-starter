export interface Route {
  path: string
  name: string
  component: () => Promise<any>
  meta: {
    layout?: string
    title?: string
    icon?: string
  }
  children?: Route[]
}

export interface Breadcrumb {
  path: string
  breadcrumbName: string
}
