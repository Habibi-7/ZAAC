import type { MockAPIOptions } from './mock-api'
import { navigateTo } from '#imports'
import { useAuthToken } from '@/composables/useAuthToken'
import { handleMockAPI } from './mock-api'

type APIOptions = MockAPIOptions & {
  headers?: Record<string, string>
}

export function useAPI<T = unknown>(api: string, options?: APIOptions): Promise<T> {
  const { removeToken } = useAuthToken()

  return handleMockAPI<T>(api, options).catch((error) => {
    if (error?.status === 401) {
      removeToken()
      navigateTo('/dashboard/login')
    }
    return Promise.reject(error)
  }) as Promise<T>
}
