import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';

const FilterInput = (props) => {
  return (
    <Col>
      <InputGroup>
        <FormControl type='text' placeholder='Keyword...'/>
        <InputGroup.Append>
          <DropdownButton
            variant='secondary'
            title='Filter By'
          >
            <DropdownItem eventKey='name'>name</DropdownItem>
            <DropdownItem eventKey='username'>username</DropdownItem>
          </DropdownButton>
        </InputGroup.Append>
      </InputGroup>
    </Col>
  );
}
export default FilterInput;