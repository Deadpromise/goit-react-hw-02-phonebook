import { ContactLi } from './ContactItem.styled';

const ContactItem = ({ name, number }) => (
    <ContactLi>
        <span>{name}</span>:
        <span>{number}</span>
    </ContactLi>
);

export default ContactItem;