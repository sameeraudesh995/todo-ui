import axios from "axios";

 const BASE_REST_API_URL = 'http://localhost:8082/api/todos';

 export const getAllTodos = () =>{
    return axios.get(BASE_REST_API_URL);
 }