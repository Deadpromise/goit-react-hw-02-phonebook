import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  static propTypes = {

  };
  state = {
    contacts: [],
    filter: ''
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
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
    console.log(this.state);
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
      <ContactList contacts={filteredContacts}>

      </ContactList>
    </div>
  };
}

export default App;
