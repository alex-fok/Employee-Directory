import { useEffect, useState } from 'react';
import getEmployeeAPI from './utils/getEmployeesAPI';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import EmployeeTable from './components/EmployeeTable';
import SortOptions from './components/SortOptions';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [sortCategory, setSortCat] = useState();
  const [sortOrder, setSortOrder] = useState('ascend');
  const [filterCategory, setFilterCat] = useState();
  const [filteWord, setFilterWord] = useState("");

  useEffect(() => {
    // execute anonymus async function for getting employees
    (async() => {
      const { data } = (await getEmployeeAPI());
      
      if (data.error)
        return console.log(data.error);

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
      }
    }
    return employees.slice().sort(sortByCat[category][order]);
  }

  const handleSort = (category) => {
    setSortCat(category);
    setEmployees(sortEmployees(category));
  }    

  const handleOrder = (order) => {
    if (order === sortOrder) return;
    
    setSortOrder(order);
    if (sortCategory) setEmployees(sortEmployees(sortCategory, order));
  }

  const filter = () => {
    
  }

  const handleFilterWord = (word) => setFilterWord(word)

  return (
    <Container>
      <Row>
        <SortOptions
          sortCategory={sortCategory}
          handleSort={handleSort}
          sortOrder={sortOrder}
          handleOrder={handleOrder}
        />
      </Row>
      <Row>
        <EmployeeTable employees={employees}/>
      </Row>
    </Container>
  )
}
export default App;