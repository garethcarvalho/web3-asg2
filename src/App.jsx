import { useState } from 'react'
import UserFormView from './components/UserFormView';
import HomeView from './components/HomeView';

function App() {
  const [userData, setUserData] = useState(null);

  function login(loginData) {
    setUserData(loginData);
  }

  function logout() {
    setUserData(null);
  }

  function renderUserFormView() {
    return (
      <>
        <UserFormView onLogin={login} />
      </>
    );
  }

  function renderHomeView() {
    return (
      <>
        <HomeView onLogout={logout} />
      </>
    );
  }

  if (!userData)
    return renderUserFormView();
  return renderHomeView();
}

export default App
