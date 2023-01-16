import createAtom from 'zustand'
import { IAuth } from '@/lib/types/auth'

// export const useAuthStore = createAtom((set) => ({
//   auth: null,
//   setAuth: (auth: any) => set((state) => ({ ...state, auth }))
// }))


interface IAuthAtom {
  auth: IAuth | null
  setAuth: ({
    id,
    lastname,
    phone,
    roles,
    address,
    createdAt,
    updatedAt,
    firstname,
    password,
    token
  }: IAuth) => void
  removeAuth: () => void
}

export const useAuthStore = createAtom<IAuthAtom>(set => ({
  auth: {
    createdAt: '20/20/2020',
    id: '1',
    lastname: 'Blanco',
    phone: '+584121234567',
    roles: ['BASIC'],
    address: 'address',
    firstname: 'Kevin',
    password: 'password123',
    token: 'tokensito23425',
    updatedAt: '20/20/2020'
  },

  setAuth: ({
    id,
    lastname,
    phone,
    roles,
    address,
    createdAt,
    updatedAt,
    firstname,
    password,
    token
  }) => {
    set({
      auth: {
        id,
        lastname,
        phone,
        roles,
        address,
        createdAt,
        updatedAt,
        firstname,
        password,
        token
      }
    })
  },

  removeAuth: () => {
    set({ auth: null })
  }
}))
