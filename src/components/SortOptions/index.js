
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
          title={`Sort By: ${sortCategory ? sortCategory : ''}`}
          sortBy={handleSort}
        />
      </Col>
      <Col>
        <OrderDropdown
          title={`Order By: ${sortOrder ? sortOrder : ''}`}
          orderBy={handleOrder}
        />
      </Col>
    </Fragment>
  )
}

export default SortOptions;