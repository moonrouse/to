import './notes.css'
import { list, grid } from '../../assets/image'
import { useContext, useState } from 'react'
import Notesitem from '../Notesitem/Notesitem'
import { NotesContext } from '../../Store/NotesProvaider'
const Notes = () => {
  const [btn, setBtn] = useState(true)
  const {notes, save, lang, words} = useContext(NotesContext)
  const notesList = notes.filter((elem)=>{
    const result = elem.title.concat(elem.desc).toLowerCase().includes(save.toLowerCase())
    return result
  })
  return (
    <div className='notes'>
      <div className="container">
        <div className="notes__top">
          <h2 className='notes__title'>
            { notesList.length > 0 ? words.infobar[lang] : words.noinfobar[lang] } 
            </h2>
          <button onClick={()=>{setBtn(!btn)}} className="notes__btn">
            <img src={ btn ? list : grid } alt="" />
            <span>{ btn ? words.list[lang] : words.grid[lang]}</span>
          </button>
        </div>
        <div className={`notes__content ${!btn ? "active" : ""}`}>
          {
           notesList.map((elem)=>(
              <Notesitem key={elem.id} note={elem}/>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Notes
