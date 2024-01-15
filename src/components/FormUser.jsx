import { useEffect } from "react"
import {useForm} from "react-hook-form"
import './style/formUser.css'

const FormUser = ({createUsers, userUpdata, updateUsers, setUserUpdata, setFormClose }) => {

   const {handleSubmit, reset, register} = useForm()

   useEffect(() => {
    reset(userUpdata)
   }, [userUpdata])

   const submit = data => {
    if(userUpdata) {
      updateUsers(userUpdata.id, data)
      setUserUpdata()
    }else {
      createUsers(data)
    }
    
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
    setFormClose(true)
   }

   const handleExit = () => {
    setFormClose(true)
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
    setUserUpdata()
   }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div className="form__X" onClick={handleExit}>X</div>
      <h2 className="form__title">{userUpdata ? 'Updata User' : 'Create new title'}</h2>
      <label className="form__label">
        <span className="form__field__name">Email</span>
        <input className="form__field" {...register('email')} type="email" placeholder="Joel@gmail.com"/>
      </label>
      <label className="form__label">
        <span className="form__field__name">Password</span>
        <input className="form__field" {...register('password')} type="password" />
      </label>
      <label className="form__label">
        <span className="form__field__name">First name</span>
        <input className="form__field" {...register('first_name')} type="text" />
      </label>
      <label className="form__label">
        <span className="form__field__name">Last name</span>
        <input className="form__field" {...register('last_name')} type="text" />
      </label>
      <label className="form__label">
        <span className="form__field__name">Birthday</span>
        <input className="form__field" {...register('birthday')} type="date" />
      </label>
      <button className="form__btn">{userUpdata ? 'Updata' : 'Create'}</button>
    </form>
  )
}

export default FormUser