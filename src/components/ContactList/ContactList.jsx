import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { selectContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectFilter } from 'redux/filter/selectors';

const ContactList = ({ children }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const { items, isLoading } = useSelector(selectContacts);
  const [deletingContact, setDeletingContact] = useState(null);

  const findContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = findContacts();

  const handleDeleteContact = async id => {
    setDeletingContact(id);
    await dispatch(deleteContact(id));
    setDeletingContact(null);
  };

  return (
    <>
      <h2 className={css.contactsTitle}>Contacts</h2>
      {children}
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.item}>
              <p className={css.value}>
                {name}: {number}
              </p>
              <button
                type="button"
                onClick={() => handleDeleteContact(id)}
                className={css.btn}
                disabled={isLoading || deletingContact === id}
              >
                {deletingContact === id ? 'Deleting...' : 'Delete'}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
