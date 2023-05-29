import ContactsPage from 'pages/ContactsPage';

const { useSelector } = require('react-redux');
const { selectAuth } = require('redux/auth/selectors');

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  return !isLoggedIn ? children : <ContactsPage />;
};

export default PublicRoute;
