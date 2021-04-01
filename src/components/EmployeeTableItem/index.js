const EmployeeTableItem = (props) => {

  const { name, email, login, picture } = props.employee;
  
  return (
    <tr>
      <td><img alt={login.username} src={picture.medium}/></td>
      <td>{login.username}</td>
      <td>{`${name.first} ${name.last}`}</td>
      <td>{email}</td>
    </tr>
  )
}

export default EmployeeTableItem;