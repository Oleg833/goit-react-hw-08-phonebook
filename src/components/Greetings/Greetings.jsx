import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth, selectUserName } from 'redux/auth/selectors';
import Message from 'components/Message/Message';
import css from './Greetings.module.css';

const Greetings = () => {
  const name = useSelector(selectUserName);
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <div className={css.greetings}>
      <h2 className={css.title}> You are welcome!</h2>
      <div className={css.imageContainer}>
        <img
          className={css.image}
          src={`https://cdn.pixabay.com/photo/2022/03/12/11/15/ukraine-7063987_1280.jpg`}
          alt="img"
          width="350px"
          height="350px"
        />
      </div>
      {isLoggedIn ? (
        <div className={css.authContainer}>
          <Message text={`${name}, go to contacts.`} />
          <Link className={css.link} to={'/contacts'}>
            Contacts
          </Link>
        </div>
      ) : (
        <>
          <Message text="Log in or register" />
          <div className={css.linkContainer}>
            <Link className={css.link} to={'/login'}>
              Log in
            </Link>
            <Link className={css.link} to={'/register'}>
              Sign up
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Greetings;
