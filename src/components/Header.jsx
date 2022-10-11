import '../App.css';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Header = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  if (loggedInUser) {

    return (
        <header>
        <h1>Northcoders News
          <img className="loggedIn-img" src={loggedInUser.avatar_url} /> </h1>
        {/* <p className="Article">Logged in as {loggedInUser.username}</p>  */}
    </header>
    );
  } else {

    return (
      <header>
      <h1>Northcoders News
      </h1>

  </header>
  );
  }
};
export default Header;