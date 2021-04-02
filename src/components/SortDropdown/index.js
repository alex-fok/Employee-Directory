import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import capitalize from '../../utils/capitalize';

const SortDropDown = (props) => {
  return (
    <DropdownButton
      title={`Sort By ${props.sortBy ? capitalize(props.sortBy) : ''}`}
      onSelect={props.sort}
      variant='outline-secondary'
    >
      <DropdownItem eventKey='name'>Name</DropdownItem>
      <DropdownItem eventKey='username'>Username</DropdownItem>
      <DropdownItem eventKey='email'>Email</DropdownItem>
    </DropdownButton>
  );
}
export default SortDropDown;