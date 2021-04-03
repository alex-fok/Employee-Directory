import Table from 'react-bootstrap/Table';

const EmployeeTableItem = ({ name, email, username, picture }) => {
  return (
    <tr>
      <td><img alt={username} src={picture}/></td>
      <td>{username}</td>
      <td>{`${name.first} ${name.last}`}</td>
      <td>{email}</td>
    </tr>
  )
}

const EmployeeTable = (props) => {
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
            name={e.name}
            email={e.email}
            username={e.login.username}
            picture={e.picture.medium}
            key={i}
          />
        ) }
      </tbody>
    </Table>
  );
}

export default EmployeeTable;