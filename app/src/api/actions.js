import { post } from '@/utils/request'
import api from './api'
import qs from 'qs'

export function reg(data) {
	return post(api.reg, qs.stringify(data))
}