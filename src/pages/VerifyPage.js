import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
// import { redirect } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import { verify } from 'redux/auth/authOperations';
import LogInForm from 'components/LoginForm/LoginForm';

const VerifyPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const verifyToken = location.pathname.split('/')[2];
  console.log('Verify=', verifyToken);

  if (verifyToken) {
    dispatch(verify(verifyToken));

    // if (data.payload) {
    //   // return <Navigate to={'/login'} replace />;
    //   return navigate('/login');
    // }
    return <p>verify</p>;
  }

  // return <p>verify</p>;
  return <LogInForm />;
};

export default VerifyPage;
