import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import capitalize from '../../utils/capitalize';

const OrderDropdown = (props) => {
  return (
    <DropdownButton
      title={`Order By ${capitalize(props.orderBy)}`}
      onSelect={props.order}
      variant='success'
      id="order"
    >
      <DropdownItem eventKey='ascend' active={props.orderBy==='ascend'}>Ascend</DropdownItem>
      <DropdownItem eventKey='descend' active={props.orderBy==='descend'}>Descend</DropdownItem>
    </DropdownButton>
  );
}


export default OrderDropdown;