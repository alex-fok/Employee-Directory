import { useEffect, useState } from 'react';
import getEmployeeAPI from './utils/getEmployeesAPI';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import EmployeeTable from './components/EmployeeTable';
import SortOptions from './components/SortOptions';
import FilterInput from './components/FilterInput';

const App = () => {
  // variable 'all' stores all employees fetched from API
  const [all, setAll] = useState([]);
  // variable 'employees' represents the employees being displayed
  const [employees, setEmployees] = useState([]);

  const [sortCategory, setSortCat] = useState();
  const [sortOrder, setSortOrder] = useState('ascend');
  const [filterWord, setFilterWord] = useState('');
  const [filterCategory, setFilterCat] = useState('name');

  useEffect(() => {
    // execute anonymus async function for getting all employees
    (async() => {
      const { data } = (await getEmployeeAPI());
      
      if (data.error) return console.log(data.error);
      setAll(data.results);
      setEmployees(data.results);
    })();
  },[]);

  const sortEmployees = (category, order = sortOrder) => {
    const sortByCat = {
      'name': {
        ascend:(a, b) => a.name.first.localeCompare(b.name.first),
        descend: (a, b) => b.name.first.localeCompare(a.name.first)
      },
      'username': {
        ascend: (a, b) => a.login.username.localeCompare(b.login.username),
        descend: (a, b) => b.login.username.localeCompare(a.login.username)
      },
      'email': {
        ascend: (a, b) => a.email.localeCompare(b.email),
        descend: (a, b) => b.email.localeCompare(a.email)
      }
    }
    return employees.slice().sort(sortByCat[category][order]);
  }

  const filterEmployees = (employees, keyword, category) => {
    const filter = {
      'name': e => e.name.first.toLowerCase().includes(keyword, 0),
      'username': e => e.login.username.toLowerCase().includes(keyword, 0),
      'email': e => e.email.toLowerCase().includes(keyword, 0)
    }
    return employees.filter(filter[category])
  }

  const handleSort = (category) => {
    if (category === sortCategory) return;

    setSortCat(category);
    setEmployees(sortEmployees(category));
  }    

  const handleOrder = (order) => {
    if (order === sortOrder) return;
    
    setSortOrder(order);
    sortCategory
      ? setEmployees(sortEmployees(sortCategory, order))
      : setEmployees(prev => prev.reverse());
  }

  const handleFilterWord = (input) => {
    const word = input.trim().toLowerCase();
    setFilterWord(word.toLowerCase());

    word.length > 2 && filterCategory
      ? setEmployees(prev => filterEmployees(prev, word, filterCategory))
      : setEmployees(all);
  }

  const handleFilterCategory = (category) => {
    if (category === filterCategory) return;

    setFilterCat(category);
    
    if (filterWord.length > 2)
      setEmployees(prev => filterEmployees(prev, filterWord, category));
  }

  return (
    <Container>
      <Row className='my-3'>
        <SortOptions
          sortCategory={sortCategory}
          sortOrder={sortOrder}
          handleSort={handleSort}
          handleOrder={handleOrder}
        />
        <FilterInput
          filterWord={filterWord}
          filterCategory={filterCategory}
          handleFilterWord={handleFilterWord}
          handleFilterCategory={handleFilterCategory}
        />
      </Row>
      <Row>
        <EmployeeTable employees={employees}/>
      </Row>
    </Container>
  )
}
export default App;