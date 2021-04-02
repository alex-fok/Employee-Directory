import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import capitalize from '../../utils/capitalize';

const FilterInput = (props) => {
  return (
    <Col sm={5}>
      <InputGroup>
        <FormControl
          type='text'
          placeholder='Keyword...'
          onChange={e => props.handleFilterWord(e.target.value)}
        />
        <InputGroup.Append>
          <DropdownButton
            variant='secondary'
            title={`Filter By ${props.filterCategory ? capitalize(props.filterCategory): ''}`}
            onSelect={props.handleFilterCategory}
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