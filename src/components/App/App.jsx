import {
  lazy,
  Suspense,
  useEffect,
} from 'react';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refresh } from '../../redux/auth/operations';

import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage ')
);
const LogInPage = lazy(() => import('../../pages/LogInPage/LogInPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);


  useEffect(() => {
    dispatch(refresh());
  }, [dispatch])

// return (
//   <Layout>
//   <Suspense fallback={null}>
//     <Routes>
//       <Route path='*' element={<AppBar/>}/>
//       <Route path='/' element={<HomePage />} />
//       <Route path='/register' element={<RegisterPage />} />
//       <Route path='/login' element={<LogInPage />} />
//       <Route path='/contacts' element={<ContactsPage />} />
//     </Routes>
//   </Suspense>
// </Layout>
// )

return isRefreshing ? (<b>Refreshing user...</b>) : (
  <Layout>
    <Suspense fallback={null}>
      <Routes>
      <Route path='*' element={<AppBar/>}/>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={
          <RestrictedRoute redirectTo='/contacts' component={<RegisterPage/>} />
        } />
        <Route path='/login' element={
          <RestrictedRoute redirectTo='/contacts' component={<LogInPage/>} />
        } />
        <Route path='/contacts' element={
          <PrivateRoute redirectTo='/login' component={<ContactsPage/>} />
        } />
      </Routes>
    </Suspense>
  </Layout>
)
}

export default App;
