import NavDropdown from 'react-bootstrap/NavDropdown';
import capitalize from '../../utils/capitalize';

const OrderDropdown = (props) => {
  return (
    <NavDropdown
      title={`Order By ${capitalize(props.orderBy)}`}
      onSelect={props.order}
    >
      <NavDropdown.Item eventKey='ascend'>Ascend</NavDropdown.Item>
      <NavDropdown.Item eventKey='descend'>Descend</NavDropdown.Item>
    </NavDropdown>
  );
}


export default OrderDropdown;