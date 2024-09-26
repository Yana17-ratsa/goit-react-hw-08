import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
    </nav>
  );
}
export default Navigation;
