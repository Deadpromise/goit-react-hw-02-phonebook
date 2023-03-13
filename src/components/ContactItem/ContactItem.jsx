import { ContactLi } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDelete }) => (
    <ContactLi>
        <span>{name}</span>:
        <span>{number}</span>
        <button type='button' onClick={() => {onDelete(id)}}>DELETE</button>
    </ContactLi>
);

export default ContactItem;