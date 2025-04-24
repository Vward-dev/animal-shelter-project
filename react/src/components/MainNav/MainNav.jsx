import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styles from './MainNav.module.css';


export default function MainNav({}) {  
  const user = useContext(UserContext);

 

  return (
    <nav id="main-nav" className={styles.navList}>

    

      <div className="nav-link">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/pets">Pets</NavLink>
      </div>
      {user && user.authorities[0].name === "ROLE_ADMIN" && (
        <div className="nav-link">
        <NavLink  to="/pending">
           Pending Applications
           </NavLink>
      </div>
        )}

      {user && (user.authorities[0].name === "ROLE_VOLUNTEER" || user.authorities[0].name === "ROLE_ADMIN") && (
        <>
        <div className="nav-link">
        <NavLink to="/addpet">Add a Pet</NavLink>
      </div>
      <div className="nav-link">
        <NavLink to="/volunteer"> Volunteers</NavLink>
      </div>
      </>
      )}

      {user ? (
        <>
          
          <div className="nav-link">
            <NavLink to="/application">
              Join Us
            </NavLink>
          </div>
          
          <div className="nav-link">
            <NavLink to="/userProfile">
              Profile
            </NavLink>
          </div>
          <div className="nav-link">
            <Link to="/logout">
              Logout
            </Link>
          </div>
        </>
      ) : (
        <div className="nav-link">
          <NavLink to="/login">
            Login
          </NavLink>
        </div>

      )}

    </nav>
  );
}
