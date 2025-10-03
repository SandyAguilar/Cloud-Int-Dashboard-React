import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE || '/api'
export const api = axios.create({ baseURL })

// Health check
export const getHealth = () => api.get('/health').then(r => r.data)

// Get configured providers
export const getProviders = () => api.get('/providers').then(r => r.data)

// GCP endpoints
export const getGcpMtd = () => api.get('/gcp/costs/mtd').then(r => r.data)
export const getGcpDaily = (days = 30) => api.get(`/gcp/costs/daily?days=${days}`).then(r => r.data)
export const getGcpLiveMetrics = () => api.get('/gcp/metrics/live').then(r => r.data)

// AWS endpoints
export const getAwsMtd = () => api.get('/aws/costs/mtd').then(r => r.data)
export const getAwsDaily = (days = 30) => api.get(`/aws/costs/daily?days=${days}`).then(r => r.data)

// Azure endpoints
export const getAzureMtd = () => api.get('/azure/costs/mtd').then(r => r.data)
export const getAzureDaily = (days = 30) => api.get(`/azure/costs/daily?days=${days}`).then(r => r.data)

// Unified endpoints
export const getCostsSummary = () => api.get('/costs/summary').then(r => r.data)