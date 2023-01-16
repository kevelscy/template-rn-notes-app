export type TOrderState = 'PENDING' | 'IN_PROGRESS' | 'FINISHED'

type TOrderStateKey = {
  PENDING: 'PENDING'
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
}

export const ORDER_STATE: TOrderStateKey = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
}

export interface IOrderSchema {
  id?: string
  _id?: string
  state: TOrderState
  user: string
}