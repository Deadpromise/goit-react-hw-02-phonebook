import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts }) => (
    <ul>{
        contacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number ={number}></ContactItem>
        ))
    }</ul>
);


export default ContactList;