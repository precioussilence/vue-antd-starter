export interface SearchUserParams {
  username?: string
  realname?: string
  nickname?: string
  phone?: string
  email?: string
  depart?: string
  gender?: number
  status?: number
}

export interface UserListItem {
  id: number
  username: string
  realname: string
  nickname: string
  phone: string
  email: string
  depart: string
  gender: string
  status: string
  createTime: string
  updateTime: string
}
