import { StateType } from '../store'

export const getValue = (state?: StateType) => state?.toolkit?.count || 0

//
