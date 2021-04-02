
import {Fragment} from 'react';
import Col from 'react-bootstrap/Col';
import SortDropdown from '../SortDropdown';
import OrderDropdown from '../OrderDropdown';

const SortOptions = (props) => {
  const {sortCategory, handleSort, sortOrder, handleOrder} = props;
  return (
    <Fragment>
      <Col>
        <SortDropdown
          sort={handleSort}
          sortBy={sortCategory}
        />
      </Col>
      <Col>
        <OrderDropdown
          orderBy={sortOrder}
          order={handleOrder}
        />
      </Col>
    </Fragment>
  )
}

export default SortOptions;