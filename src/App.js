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
      "name": (a, b) =>
        order === 'ascend'
          ? a.name.first.localeCompare(b.name.first)
          : b.name.first.localeCompare(a.name.first)
      ,
      "username": (a, b) =>
        order === 'ascend'
          ? a.login.username.localeCompare(b.login.username)
          : b.login.username.localeCompare(a.login.username)
    }
    setSortCat(category);
    setEmployees(employees.slice().sort(sortByCat[category]));
  }

  const handleSort = (category) => sortEmployees(category);    

  const handleOrder = (selection) => {
    console.log(`selection: ${selection}\nsortOrder: ${sortOrder}`);
    if (selection !== sortOrder) {
      console.log(`sortCategory: ${sortCategory}\nselection: ${selection}\nsortOrder: ${sortOrder}`);
      setSortOrder(selection);
      if (sortCategory) sortEmployees(sortCategory, selection);
    }
  }

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