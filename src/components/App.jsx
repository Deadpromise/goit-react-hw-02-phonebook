import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";

class App extends Component {
  static propTypes = {

  };
  state = {
    contacts: [],
    filter: ''
  };

  render() {

    return <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <ContactForm></ContactForm>
    </div>
  };
}

export default App;
