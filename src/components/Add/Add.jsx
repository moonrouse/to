import { useContext } from 'react'
import { edit } from '../../assets/image'
import './add.css'
import { NotesContext } from '../../Store/NotesProvaider'

const Add = () => {
  const {setModal} = useContext(NotesContext)
  return (
    <button onClick={()=>{setModal(true)}} className='add'>
      <img src={edit} alt="" />
    </button>
  )
}

export default Add
