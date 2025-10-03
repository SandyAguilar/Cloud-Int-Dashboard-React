import React, { useState } from 'react';
import { useProviders } from '../hooks/useCloudData';
import ProviderTab from './ProviderTab';
import './CloudDashboard.css';

export default function CloudDashboard() {
  // Get all configured providers
  const { providers, loading, error } = useProviders();
  
  // Track which tab is currently active
  const [activeTab, setActiveTab] = useState(null);

  // Set first provider as active once loaded
  React.useEffect(() => {
    if (providers.length > 0 && !activeTab) {
      setActiveTab(providers[0].name);
    }
  }, [providers, activeTab]);

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (providers.length === 0) {
    return (
      <div className="no-providers">
        <h2>No Cloud Providers Configured</h2>
        <p>Add cloud provider credentials to your backend .env file</p>
      </div>
    );
  }

  return (
    <div className="cloud-dashboard">
      <header className="dashboard-header">
        <h1>Multi-Cloud Intelligence Dashboard</h1>
      </header>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        {providers.map((provider) => (
          <button
            key={provider.name}
            className={`tab-button ${activeTab === provider.name ? 'active' : ''}`}
            onClick={() => setActiveTab(provider.name)}
          >
            <span className="tab-icon">{getProviderIcon(provider.name)}</span>
            <span className="tab-label">{provider.display_name}</span>
          </button>
        ))}
      </div>

      {/* Tab Content - Each provider gets its own tab */}
      <div className="tab-content">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className={`tab-panel ${activeTab === provider.name ? 'active' : 'hidden'}`}
          >
            {/* Only render the active tab's content for performance */}
            {activeTab === provider.name && (
              <ProviderTab provider={provider.name} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to get provider icons/emojis
function getProviderIcon(provider) {
  const icons = {
    gcp: '☁️',
    aws: '🟠',
    azure: '🔷'
  };
  return icons[provider] || '☁️';
}