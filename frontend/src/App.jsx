import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  const [view, setView] = useState('login'); 
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setView('profile');
    }
  }, []);

  const handleLoginSuccess = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setView('profile');
  };

  const handleRegisterSuccess = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setView('profile');
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setView('login');
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <div className="logo-container">
          <div className="logo">{'</>'}</div>
          <h1 className="title">CodeClash</h1>
        </div>
      </div>

      {/* Main */}
      <div className="main">
        <div className="topbar">
          <h1 style={{fontSize: '1.4rem', fontWeight: 700}}>CodeClash</h1>
          <div className="search" style={{width: 'auto', gap: '8px'}}>
            {view === 'profile' && <span style={{color: '#9aa6b2'}}>👤 {user?.name}</span>}
          </div>
        </div>
        
        <div className="panel">
          {view === 'login' && (
            <Login
              onSuccess={handleLoginSuccess}
              onSwitchToRegister={() => setView('register')}
            />
          )}

          {view === 'register' && (
            <Register
              onSuccess={handleRegisterSuccess}
              onSwitchToLogin={() => setView('login')}
            />
          )}

          {view === 'profile' && (
            <Profile
              user={user}
              token={token}
              onLogout={handleLogout}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
