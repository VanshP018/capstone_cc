import { useState, useEffect } from 'react';
import { getProfile } from '../api';

function Profile({ user, token, onLogout }) {
  const [profileData, setProfileData] = useState(user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProfile = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getProfile(token);
      setProfileData(response.user);
    } catch (err) {
      setError(err.message || 'Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile Dashboard</h2>
      
      <div className="profile-card" style={{marginTop: '16px'}}>
        <div className="profile-info">
          <div className="profile-meta">
            <div className="avatar">{profileData?.name?.charAt(0).toUpperCase()}</div>
            <div>
              <p style={{fontSize: '1rem', fontWeight: 600, color: '#eaf2ff'}}>{profileData?.name}</p>
              <p className="small">{profileData?.email}</p>
              <p className="small">ID: {profileData?.id}</p>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="button-group" style={{display: 'flex', gap: '8px', flexDirection: 'row', marginLeft: 'auto'}}>
            <button 
              onClick={fetchProfile} 
              className="btn btn-ghost"
              disabled={loading}
              style={{fontSize: '0.9rem'}}
            >
              {loading ? '⟳ Refreshing...' : '⟳ Refresh'}
            </button>
            
            <button onClick={onLogout} className="btn btn-danger" style={{fontSize: '0.9rem'}}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
