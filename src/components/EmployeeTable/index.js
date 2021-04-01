
import Table from 'react-bootstrap/Table';
import EmployeeTableItem from '../EmployeeTableItem';


function EmployeeTable(props) {

  return(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Profile Picutre</th>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        { props.employees.map((e, i) => 
          <EmployeeTableItem
            employee={e}
            key={i}
          />
        ) }
      </tbody>
    </Table>
  );
}

export default EmployeeTable;