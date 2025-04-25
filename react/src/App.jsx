import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import AuthService from './services/AuthService';
import HomeView from './views/HomeView/HomeView';
import LoginView from './views/LoginView/LoginView';
import LogoutView from './views/LogoutView';
import RegisterView from './views/RegisterView/RegisterView';
import UserProfileView from './views/UserProfileView/UserProfileView';
import MainNav from './components/MainNav/MainNav';
import ProtectedRoute from './components/ProtectedRoute';
import AppHeader from './components/AppHeader/AppHeader';

import axios from 'axios';
import PetView from './views/PetView/PetView';
import VolunteerView from './views/VolunteerView/VolunteerView';
import ApplicationView from './views/ApplicationView/ApplicationView';
import PendingApplication from './views/PendingApplications/PendingApplication';
import AddPetView from './views/AddPetView/AddPetView';
import UpdatePetListing from './views/UpdatePetView/UpdatePetView';
import AppFooter from './components/AppFooter/AppFooter';
import PetProfileView from './views/PetProfileView/PetProfileView';

export default function App() {
  const [user, setUser] = useState(null);
  //const [loading, setLoading] = useState(true);

  function handleLogin(userData) {
    setUser(userData);
    // setLoading(false); 
  }

  function handleLogout() {
    // Remove auth data from local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    // Clear auth token from axios
    delete axios.defaults.headers.common['Authorization'];

    // Clear the auth context
    setUser(null);
    //setLoading(false); 
  }

  // When a user comes back to the app or refreshes the page, check for user/token in local storage and validate it
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (user && token) {
      // Set the token in the axios default headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Make API request to ensure token is still valid
      AuthService.getUserProfile(user.id)
        .then((response) => {
          // Token is still valid, act like user just logged in
          handleLogin(response.data);
        })
        .catch(() => {
          // Token is not valid, act lke user just logged out
          handleLogout();
        });
    }
  }, []);


  return (
    <BrowserRouter>
      <div id="app">
        <UserContext.Provider value={user}>
          <AppHeader title="Gimme Shelter" logo="logo" />

          < MainNav />


          <main id="main-content" >
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/login" element={<LoginView onLogin={handleLogin} />} />
              <Route path="/logout" element={<LogoutView onLogout={handleLogout} />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/pets" element={<PetView />} />
              <Route path="/pending" element={<PendingApplication />} />
              <Route path="/addpet" element={<AddPetView />} />
              <Route path="pets/petProfile/:id/update" element={<UpdatePetListing />} />
              <Route path="pets/petProfile/:id" element={<PetProfileView />} />

              <Route
                path="/volunteer"
                element={
                  <VolunteerView />
                } />

              <Route
                path="/application"
                element={
                  <ApplicationView />} />

              <Route
                path="/userProfile"
                element={

                  <UserProfileView />

                }
              />
            </Routes>
          </main>
          <footer className='page-wrapper'>
            <AppFooter />
          </footer>
        </UserContext.Provider>
      </div>
    </BrowserRouter>

    
  );
}
