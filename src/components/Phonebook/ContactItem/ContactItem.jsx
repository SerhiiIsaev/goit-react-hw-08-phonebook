import React from 'react';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { removeContact } from '../../../redux/contacts/contactsOperations'; 
import styles from '../ContactItem/ContactItem.module.css'

export const ContactItem = ({ data }) => {
    const dispatch = useDispatch();

    const { id, name, number } = data;

    const onDeleteClick = (e, id) => {
        if (id === e.target.id) {
            e.target.textContent = 'Deleting...';
            e.target.setAttribute('disabled', 'true');
        }
    }
    return (<li className={styles.contactItem}>
                <p className={styles.contactText}>{name}: {number}</p>
                <button type='button' className={styles.contactBtn} id={id} onClick={(e) => onDeleteClick(e, id)}>Delete</button>
            </li>)
}

ContactItem.propTypes = {
    data: PropTypes.objectOf(PropTypes.string.isRequired,),
}