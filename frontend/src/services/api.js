// This file handles ALL communication with your Flask backend
// Think of it as a "translator" between React and Flask

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class CloudAPI {
  // Test if backend is alive
  async checkHealth() {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
  }

  // Get list of configured cloud providers (GCP, AWS, Azure)
  async getProviders() {
    const response = await fetch(`${API_BASE_URL}/providers`);
    return response.json();
  }

  // Get month-to-date costs for a specific provider
  // Example: getMTDCosts('gcp') returns all GCP services and their costs
  async getMTDCosts(provider) {
    const response = await fetch(`${API_BASE_URL}/${provider}/costs/mtd`);
    return response.json();
  }

  // Get daily costs for last N days
  // Example: getDailyCosts('gcp', 7) returns last 7 days of costs
  async getDailyCosts(provider, days = 30) {
    const response = await fetch(
      `${API_BASE_URL}/${provider}/costs/daily?days=${days}`
    );
    return response.json();
  }

  // Get live metrics (CPU, network, etc.)
  async getLiveMetrics(provider) {
    const response = await fetch(`${API_BASE_URL}/${provider}/metrics/live`);
    return response.json();
  }
}

// Export a single instance (singleton pattern)
export default new CloudAPI();