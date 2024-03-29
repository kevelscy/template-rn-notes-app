import { IReturnAuth } from '@/lib/types'
import { config } from '@/config'

const { API_URL } = config

export const signIn = async (email: string, password: string): Promise<IReturnAuth> => {
  const options: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }

  const res = await fetch(`${API_URL}/api/auth/sign-in`, options)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}

export const getAuthMe = async (token: string): Promise<IReturnAuth> => {
  const options: RequestInit = { headers: { 'Authorization': `Bearer ${token}` } }

  const res = await fetch(`${API_URL}/api/auth/me`, options)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}

export const signOut = async (accessToken: string): Promise<IReturnAuth> => {
  const options: RequestInit = { method: 'POST', headers: { 'Authorization': `Bearer ${accessToken}` } }

  const res = await fetch(`${API_URL}/api/auth/sign-out`, options)
  const { data, error } = await res.json()

  if (error) {
    return {
      data: null,
      error: {
        status: res.status,
        message: error
      }
    }
  }

  return { data, error: null }
}
