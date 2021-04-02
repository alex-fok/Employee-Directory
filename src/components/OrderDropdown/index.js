import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
// import Dropdown from 'react-bootstrap/Dropdown';

const OrderDropdown = (props) => {
  return (
    <DropdownButton
      title={props.title}
      onSelect={props.orderBy}
      variant='secondary'
      id="order"
    >
      <DropdownItem eventKey="ascend">ascend</DropdownItem>
      <DropdownItem eventKey="descend">descend</DropdownItem>
    </DropdownButton>
  );
}


export default OrderDropdown;