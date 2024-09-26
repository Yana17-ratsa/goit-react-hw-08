import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedInedIn);
  return (
    <header>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Navigation />
    </header>
  );
}
export default AppBar;
