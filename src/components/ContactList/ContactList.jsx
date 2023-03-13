import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDelete }) => (
    <ul>{
        contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={ id } name={name} number={number} onDelete={onDelete}>
            </ContactItem>
        ))
    }</ul>
);


export default ContactList;