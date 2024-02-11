import axios from 'axios'  // Axios library to make HTTP requests to a RESTful API. 
const URL = 'http://localhost:8000'

export const addUser = async(userData) => {
     return await axios.post(`${URL}/add`,userData)    //POST request to the ${URL}/add endpoint, to add a new user
//   console.log(response)
}

export const getUsers = async(req,res) =>{
  return await axios.get(`${URL}/all`)

}

export const getUser = async(id) =>{

  return await axios.get(`${URL}/${id}`)
  
}

export const editUser = async(user,id) =>{
  return await axios.put(`${URL}/edit/${id}`,user)

}

export const deleteUserDetails = async(id) =>{
  return await axios.delete(`${URL}/delete/${id}`)

}
// export default addUser