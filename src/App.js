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
  // Hook when component is mounted
  useEffect(() => {
    // execute anonymus async function for getting employees
    (async() => {
      const { data } = (await getEmployeeAPI());
      
      if (data.error)
        return console.log(data.error);

      setEmployees(data.results);
    })();
  },[]);

  // Hook for sort related variables (sortCategory, sortOrder)
  useEffect(() => {
    if (!sortCategory) return;
    const sortByCat = {
      'name': (a, b) =>
        sortOrder === 'ascend'
          ? a.name.first.localeCompare(b.name.first)
          : b.name.first.localeCompare(a.name.first)
      ,
      'username': (a, b) =>
        sortOrder === 'ascend'
          ? a.login.username.localeCompare(b.login.username)
          : b.login.username.localeCompare(a.login.username)
    }
    setEmployees(e => e.sort(sortByCat[sortCategory]));

  },[sortCategory, sortOrder])

  const handleSort = (category) => {
    if(category !== sortCategory) setSortCat(category);
  }    

  const handleOrder = (order) => {
    if (order !== sortOrder) setSortOrder(order);
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