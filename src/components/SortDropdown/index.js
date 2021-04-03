import NavDropdown from 'react-bootstrap/NavDropdown';
import capitalize from '../../utils/capitalize';

const SortDropDown = (props) => {
  return (
    <NavDropdown
      title={`Sort By ${props.sortBy ? capitalize(props.sortBy) : ''}`}
      onSelect={props.sort}
    >
      <NavDropdown.Item eventKey='name'>Name</NavDropdown.Item>
      <NavDropdown.Item eventKey='username'>Username</NavDropdown.Item>
      <NavDropdown.Item eventKey='email'>Email</NavDropdown.Item>
    </NavDropdown>
  );
}

export default SortDropDown;