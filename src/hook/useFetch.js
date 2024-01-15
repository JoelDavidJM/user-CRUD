import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {
  const [response, setresponse] = useState()

  const getApi = () => {
    const url = `${baseUrl}/users/`
    axios.get(url)
    .then(res => setresponse(res.data))
    .catch(err => console.log(err))
  }

  const createApi = (data) => {
    const url = `${baseUrl}/users/`
    axios.post(url, data)
    .then(res => {
        console.log(res.data)
        setresponse([...response, res.data])
    })
    .catch(err => console.log(err))
  }

  const delateApi = (id) => {
    const url = `${baseUrl}/users/${id}/`
    axios.delete(url)
    .then(res => {
        console.log(res)
        setresponse(response.filter(user => user.id !== id))
    })
    .catch(err => console.log(err))
  }

  const apdateApi = (id, data) => {
    const url = `${baseUrl}/users/${id}/`
    axios.put(url, data)
    .then(res => {
        console.log(res)
        setresponse(response.map(user => user.id === id ? res.data : user))
    })
    .catch(err => console.log(err))
  }

  return [response, getApi, createApi, delateApi, apdateApi]

}

export default useFetch