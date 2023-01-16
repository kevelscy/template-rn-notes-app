// import { TOrderState } from './order'

// export type TRole = 'ADMIN' | 'BASIC'

// export type TRoles = { name: TRole, _id?: string }[]
// export type TOrders = { state: TOrderState, _id?: string }[]

// export interface IUserSchema {
//   id?: string
//   _id?: string
//   phone: string
//   password: string
//   roles: TRoles | string[]
//   orders: TOrders | string[]
//   firstname?: string
//   lastname?: string
//   address?: string
// }
// export interface IAuth {
//   phone?: string
//   password: string
//   firstname?: string
//   lastname?: string
//   address?: string
//   roles: TRole[]
//   createdAt: string
//   updatedAt: string
//   id: string
//   token?: string
// }

// export interface IUserToSignUp {
//   firstname?: string
//   lastname?: string
//   phone: string
//   password: string
//   address?: string
// }

// export interface IUserToSignIn {
//   phone: string
//   password: string
// }


import { IFetchReturn } from './http'

export enum ERole {
  USER = 'USER',
  MEMBER_OF_CHURCH = 'MEMBER_OF_CHURCH',
  MEMBER_OF_MINISTRY = 'MEMBER_OF_MINISTRY',
  LEADER_OF_MINISTRY = 'LEADER_OF_MINISTRY',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN'
}

export interface IRole {
  title: ERole.USER |
  ERole.MEMBER_OF_CHURCH |
  ERole.MEMBER_OF_MINISTRY |
  ERole.LEADER_OF_MINISTRY |
  ERole.MODERATOR |
  ERole.ADMIN
  users: []
  createdAt: string
  updatedAt: string
  id: string
}

export interface IAuth {
  id: string
  email: string
  firstName: string
  lastName: string
  password: string
  isDeleted: boolean,
  picture: string | null
  birthDate: string | null
  profesion: string | null
  phone: string | null
  address: string | null
  ministries: []
  roles: IRole[]
  orders: []
  createdAt: string
  updatedAt: string
  accessToken: string
  refreshToken: string
}

export interface IReturnAuth extends IFetchReturn {
  data: IAuth
}
