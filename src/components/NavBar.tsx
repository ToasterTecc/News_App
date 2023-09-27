import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className='bg-yellow-400'>
          <Link to="/">Front Page</Link> |&nbsp;
          <Link to="/news">News Page</Link> |&nbsp;
          <Link to="/sports">Sports Page</Link> |&nbsp;
          <Link to="/staff">Staff Page</Link> |&nbsp;
          <Link to="/register">Register Page</Link> |&nbsp;
          <Link to="/login">Login Page</Link> |&nbsp;
          <Link to="/reset-password">Reset Password Page</Link> |&nbsp;
          <Link to="/confirm-reset-password">Confirm Reset Password Page</Link> |&nbsp;
          <Link to="/subscribe">Subscribe Page</Link> |&nbsp;
          <Link to="/business-panel">Business Panel Page</Link> |&nbsp;
      </nav>
    );
  };

export default NavBar