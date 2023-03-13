import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
    }

    getName = e => {
        this.setState({ name: e.currentTarget.value });
    }
    formSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.name);
        this.setState({ name: '' });

    }
    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.formSubmit}>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.getName}
                />
                <button type="submit">Add contact</button>
           </form> 
        )
    }
};

export default ContactForm;