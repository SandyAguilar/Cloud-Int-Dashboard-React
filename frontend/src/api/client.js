import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE || '/api'
export const api = axios.create({ baseURL })

export const getGcpMtd = () => api.get('/gcp/mtd').then(r => r.data)
export const getDailyCosts = () => api.get('/costs/daily').then(r => r.data)
