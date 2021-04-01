import axios from "axios";

const getEmployeesAPI = () => axios.get("https://randomuser.me/api/?format=json&results=10");

export default getEmployeesAPI;
