import { useEffect, useState } from 'react';
import getEmployeeAPI from './utils/getEmployeesAPI';
import EmployeeTable from './components/EmployeeTable';

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    (async() => {
      const { data } = (await getEmployeeAPI());
      
      if (data.error)
        return console.log(data.error);

      setEmployees(data.results);
    })();
  },[]);

  return (
    <EmployeeTable employees={employees}/>
  )
}
export default App;