import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

function UserMenu() {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {selectUser.name}</p>
      <button type='button' onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
