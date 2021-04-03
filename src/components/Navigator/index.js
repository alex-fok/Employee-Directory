
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SortDropdown from '../SortDropdown';
import OrderDropdown from '../OrderDropdown';
import FilterInput from '../FilterInput';

const Navigator = ({
  sortCategory,
  sortOrder,
  filterCategory,
  handleSort,
  handleOrder,
  handleFilterWord,
  handleFilterCategory
 }) => {
  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' fixed='top'>
        <Navbar.Brand>Employee Directory</Navbar.Brand>
        <Nav className='mr-auto'>
          <Navbar.Collapse>
            <SortDropdown sort={handleSort} sortBy={sortCategory} />
            <OrderDropdown orderBy={sortOrder} order={handleOrder}/>
          </Navbar.Collapse>
        </Nav>
        <Nav>
          <FilterInput
            filterCategory={filterCategory}
            handleFilterWord={handleFilterWord}
            handleFilterCategory={handleFilterCategory}
          />
        </Nav>
      </Navbar>
  )
}

export default Navigator;