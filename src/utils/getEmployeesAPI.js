import axios from "axios";

const getEmployeesAPI = () => axios.get("https://randomuser.me/api/?format=json&results=50");

export default getEmployeesAPI;
