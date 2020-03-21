import axios from 'axios'
import { BASE_URL } from '@/constants/serverRoutes'
import vehiclesClient from '@/clients/vehiclesClient'

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const VehiclesClient = vehiclesClient(apiClient)
