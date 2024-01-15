
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hook/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [userUpdata, setUserUpdata] = useState()
  const [formClose, setFormClose] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'

  const [users, getUsers, createUsers, delateUsers, updateUsers] = useFetch(baseUrl)

  useEffect(() => {
    getUsers()
  },[] )

  const handleOpenForm = () => {
    setFormClose(false)
  }

  return (
    <div className='app'>
      <div className='app__header'>
      <h1 className='app__title'>Usuarios</h1>
      <button className='app__btn' onClick={handleOpenForm}>+ Crear nuevo usuario</button>
      </div>
      <div className={`form__container ${formClose && 'form__close'}`}>
      <FormUser 
      createUsers={createUsers}
      userUpdata={userUpdata}
      updateUsers={updateUsers}
      setUserUpdata={setUserUpdata}
      setFormClose={setFormClose}
      />
      </div>
      <div className='app__user'>
      {
        users?.map(user => (
          <UserCard 
          key={user.id}
          user={user}
          delateUsers={delateUsers}
          setUserUpdata={setUserUpdata}
          setFormClose={setFormClose}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App
