import { User } from '@/types/user'
import { GetOneResponse } from '@/types/get-one-response'
import { getOneById } from '@/services/get-one-by-id'

export const getUser = async (): Promise<GetOneResponse<{ user: User }>> => {
  return getOneById('/auth/user', '', true)
}
