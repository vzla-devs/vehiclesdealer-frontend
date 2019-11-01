import axios from 'axios'
import vehiclesClient from '@/clients/vehiclesClient'

export const VehiclesClient = vehiclesClient(axios)
