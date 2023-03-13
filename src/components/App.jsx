import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  static propTypes = {

  };
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  };

  addContact = (name, number) => {

    const contact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState((prevState) => {
      const chekClone = prevState.contacts.find(item => item.name === contact.name || item.number === contact.number);
      if (chekClone) {
        alert(`User with name ${contact.name} or number ${contact.number} is already in contacts`);
        return {contacts: [...prevState.contacts]};
      }
      return {contacts: [contact, ...prevState.contacts]}
    })
    // this.setState(({ contacts }) => ({
      // contacts: [contact, ...contacts],
    // }));
   
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };
  getFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter));
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFiltredContacts();
    // console.log(this.state);
    return <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    ><h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.getFilter}></Filter>
      <ContactList contacts={filteredContacts} onDelete={this.deleteContact}>

      </ContactList>
    </div>
  };
}

export default App;
