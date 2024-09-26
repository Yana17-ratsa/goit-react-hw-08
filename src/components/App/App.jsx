// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';
// import css from './App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
import {
  lazy,
  Suspense,
  // useEffect
} from 'react';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
// import { fetchContacts } from '../../redux/contacts/operations';
// import {
//   selectContacts,
//   selectError,
//   selectLoading,
// } from '../../redux/contacts/slice';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LogInPage = lazy(() => import('../../pages/LogInPage/LogInPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);

function App() {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  // const contacts = useSelector(selectContacts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', contacts);
  // }, [contacts]);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  // return (
  //   <div className={css.container}>
  //     <h1>Phonebook</h1>
  //     <ContactForm />
  //     <SearchBox />
  //     {loading && <p>Loading... please wait</p>}
  //     {error && <p>Error message</p>}
  //     <ContactList />
  //   </div>
  // );

  <Layout>
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
    </Suspense>
  </Layout>;
}

export default App;
