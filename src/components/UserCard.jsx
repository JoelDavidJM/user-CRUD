import './style/userCard.css'
const UserCard = ({user, delateUsers, setUserUpdata, setFormClose }) => {

const handleDelate = () => {
  delateUsers(user.id)
}

const handleEdit = () => {
  setUserUpdata(user)
  setFormClose(false)
}

  return (
    <article className="article__container">
      <h2 className="article__h2">{user.first_name} {user.last_name}</h2>
      <hr className="article__hr" />
      <ul className="article__ul">
        <li className="article__li"><span className="article__span">Email</span><span className="article__span__li">{user.email}</span></li>
        <li className="article__li"><span className="article__span"> Birthday</span><span className="article__span__li">🎁 {user.birthday}</span></li>
      </ul>
      <hr className="article__hr" />
      <footer className='article__footer'>
        <button className="article__btn__delate" onClick={handleDelate}><i className='bx bx-trash'></i></button>
        <button className="article__btn__edit" onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
      </footer>
    </article>
  )
}

export default UserCard