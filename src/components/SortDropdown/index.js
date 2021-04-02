import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';

const SortDropDown = (props) => {
  return (
    <DropdownButton
      title={props.title}
      onSelect={props.sortBy}
      id="sort"
    >
      <DropdownItem eventKey="name">Name</DropdownItem>
      <DropdownItem eventKey="username">Username</DropdownItem>
    </DropdownButton>
  );
}
export default SortDropDown;