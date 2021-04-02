import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import capitalize from '../../utils/capitalize';

const SortDropDown = (props) => {
  return (
    <DropdownButton
      title={`Sort By ${props.sortBy ? capitalize(props.sortBy) : ''}`}
      onSelect={props.sort}
      variant='success'
    >
      <DropdownItem eventKey='name' active={props.sortBy === 'name'}>Name</DropdownItem>
      <DropdownItem eventKey='username' active={props.sortBy === 'username'}
      >Username</DropdownItem>
    </DropdownButton>
  );
}
export default SortDropDown;