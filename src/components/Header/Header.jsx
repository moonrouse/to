import React, { useContext, useState } from 'react'
import "./header.css"
import { search, back, close } from '../../assets/image'
import { NotesContext } from '../../Store/NotesProvaider'
const Header = () => {
  const [hide, setHide] = useState(false)
  const {save, setSave, lang, setLang, words} = useContext(NotesContext)
  const changeHide = () => {
    setHide(!hide)
    setSave("")
  }
  return (
    <header className='header'>
      <div className={`header__content ${hide ? "active" : ""}` }>
        {
          lang == "ru"
          ? 
          <button onClick={()=>{setLang("uz")}} className='header__lang'>uz</button>
          :
           lang == "uz"
          ? 
          <button onClick={()=>{setLang("en")}} className='header__lang'>en</button>
          :
          <button onClick={()=>{setLang("ru")}} className='header__lang'>ru</button>
        }
        <h1 className='header__title'>
          {words.appbartitle[lang]}
        </h1>
        <button onClick={changeHide}>
          <img src={search} alt="" />
        </button>
      </div>
      <div className={`header__form ${!hide ? "active" : ""}` }>
        <button onClick={changeHide}>
          <img src={back} alt="" />
        </button>
        <input onChange={(event)=>{setSave(event.target.value);}} value={save} type="text" className='header__input container' placeholder={words.appbarseacrch[lang]}  />
        <button onClick={()=>{setSave("")}}>
          <img src={close} alt="" />
        </button>
      </div>
    </header>
  )
}

export default Header
