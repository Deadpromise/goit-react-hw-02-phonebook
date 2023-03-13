import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

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
  
  }

  render() {
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
      <ContactList contacts={this.state.contacts}>

      </ContactList>
    </div>
  };
}

export default App;
